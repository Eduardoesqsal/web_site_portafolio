import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestLog = new Map<string, number[]>();

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((timestamp) => now - timestamp < 60_000);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > 4;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Demasiados intentos. Espera un minuto y vuelve a intentarlo." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "La solicitud no es válida." }, { status: 400 });
  }

  const name = asText(payload.name);
  const email = asText(payload.email).toLowerCase();
  const projectType = asText(payload.projectType);
  const message = asText(payload.message);
  const honeypot = asText(payload.companyWebsite);

  if (honeypot) {
    return NextResponse.json({ message: "Mensaje recibido." });
  }

  if (
    name.length < 2 ||
    name.length > 80 ||
    !emailPattern.test(email) ||
    email.length > 160 ||
    projectType.length < 2 ||
    projectType.length > 80 ||
    message.length < 20 ||
    message.length > 3000
  ) {
    return NextResponse.json(
      { message: "Revisa los campos e incluye al menos 20 caracteres en el mensaje." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact:preview]", { name, email, projectType, message });
      return NextResponse.json({
        message: "Mensaje validado en modo local. Configura Resend para enviarlo por correo.",
      });
    }

    return NextResponse.json(
      { message: "El correo no está configurado todavía. Escríbeme directamente desde el enlace de correo." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nuevo proyecto: ${projectType} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#171717">
          <p style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#059669">Nuevo contacto desde el portafolio</p>
          <h1 style="font-size:24px">${escapeHtml(name)}</h1>
          <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
          <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
          <div style="margin-top:24px;padding:20px;background:#f5f5f5;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    console.error("[contact:resend]", response.status, await response.text());
    return NextResponse.json(
      { message: "No se pudo enviar el mensaje ahora. Inténtalo de nuevo en unos minutos." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Mensaje enviado. Te responderé muy pronto." });
}
