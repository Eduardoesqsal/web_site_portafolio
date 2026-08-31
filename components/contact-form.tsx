"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const body = [
      `*Nuevo mensaje desde tu porfolio*`,
      ``,
      `Nombre: ${name || "(sin nombre)"}`,
      `Tipo de proyecto: ${projectType || "Sin especificar"}`,
      ``,
      `Mensaje: ${message}`,
    ].join("\n");

    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <Input id="name" name="name" autoComplete="name" placeholder="Tu nombre" required minLength={2} maxLength={80} />
        </Field>
        <Field label="Tipo de proyecto" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
            className="h-12 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-700 shadow-sm outline-none transition hover:border-neutral-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Aplicación web</option>
            <option>Datos espaciales</option>
            <option>IA / Computer Vision</option>
            <option>Agente y automatización</option>
            <option>API / Backend</option>
            <option>Otro</option>
          </select>
        </Field>
      </div>
      <Field label="Cuéntame sobre el reto" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          placeholder="Objetivo, contexto, alcance aproximado y tiempos..."
          required
          minLength={20}
          maxLength={3000}
        />
      </Field>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Sitio web de empresa</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[10px] leading-4 text-neutral-400">
          Se abrirá WhatsApp con tu mensaje listo para enviar. Sin costo para ti.
        </p>
        <Button type="submit" size="lg" className="sm:min-w-40">
          <MessageCircle /> Enviar por WhatsApp
        </Button>
      </div>

      <div className="min-h-10" aria-live="polite">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={reduceMotion ? false : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-xs text-emerald-800"
              role="status"
            >
              <CheckCircle2 className="size-4" /> Listo. Se abrió WhatsApp con tu mensaje preparado.
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold text-neutral-700">
        {label}
      </label>
      {children}
    </div>
  );
}