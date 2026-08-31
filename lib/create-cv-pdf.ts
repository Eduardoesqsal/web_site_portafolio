import { siteConfig } from "@/lib/site-data";

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function text(fontSize: number, x: number, y: number, value: string, gray = 0.12) {
  return `${gray} g BT /F1 ${fontSize} Tf ${x} ${y} Td (${escapePdfText(value)}) Tj ET`;
}

export function createCvPdf() {
  const content = [
    "0.06 0.08 0.07 rg 0 700 612 92 re f",
    "0.2 0.83 0.6 rg 42 754 24 5 re f",
    text(25, 42, 730, siteConfig.name, 1),
    text(11, 42, 712, "DESARROLLADOR DE SOFTWARE", 0.78),
    text(9, 42, 681, `${siteConfig.location}  |  ${siteConfig.email}`, 0.38),
    text(14, 42, 645, "PERFIL"),
    "0.15 0.72 0.52 rg 42 637 42 2 re f",
    text(10, 42, 615, "Desarrollador Full Stack especializado en productos web,", 0.3),
    text(10, 42, 599, "inteligencia artificial, vision por computadora y automatizacion.", 0.3),
    text(10, 42, 583, "Trabajo con soluciones reales y tambien con proyectos geoespaciales.", 0.3),
    text(14, 42, 542, "EXPERIENCIA"),
    "0.15 0.72 0.52 rg 42 534 64 2 re f",
    text(11, 42, 507, "Full Stack & AI Developer", 0.12),
    text(9, 430, 507, "2024 - Actual", 0.42),
    text(9, 42, 491, "Consultoria independiente", 0.35),
    text(9, 54, 469, "Productos web, APIs, agentes inteligentes y sistemas de vision.", 0.4),
    text(11, 42, 437, "Software Developer", 0.12),
    text(9, 430, 437, "2022 - 2024", 0.42),
    text(9, 42, 421, "Proyectos reales de producto", 0.35),
    text(9, 54, 399, "E-commerce, biometria, GeoField App y portal fotogrametrico.", 0.4),
    text(14, 42, 354, "TECNOLOGIAS"),
    "0.15 0.72 0.52 rg 42 346 67 2 re f",
    text(10, 42, 320, "Frontend", 0.12),
    text(9, 42, 304, "React.js | Next.js | TypeScript | Tailwind CSS", 0.4),
    text(10, 42, 276, "Backend y datos", 0.12),
    text(9, 42, 260, "Python | FastAPI | Flask | Express.js | PostgreSQL | PostGIS", 0.4),
    text(10, 42, 232, "Geoespacial e inteligencia artificial", 0.12),
    text(9, 42, 216, "Leaflet | OpenLayers | Metashape | YOLO | Segmentacion | Agentes", 0.4),
    text(10, 42, 188, "Herramientas", 0.12),
    text(9, 42, 172, "Git | GitHub | Docker | Supabase | Vercel", 0.4),
    text(14, 42, 125, "ESPECIALIDADES"),
    "0.15 0.72 0.52 rg 42 117 76 2 re f",
    text(9, 42, 92, "Software web | Computer Vision | Infraestructura de datos | AI Agents | Automatizacion", 0.35),
    text(8, 42, 42, "CV generado desde el portafolio. Personaliza los datos en lib/site-data.ts.", 0.55),
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Uint8Array(Buffer.from(pdf, "utf8"));
}
