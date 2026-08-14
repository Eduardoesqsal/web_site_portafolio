"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "loading" });
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message ?? "No se pudo enviar el mensaje.");

      setStatus({
        state: "success",
        message: data.message ?? "Mensaje enviado. Te responderé muy pronto.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Ocurrió un error inesperado.",
      });
    }
  }

  const isLoading = status.state === "loading";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <Input id="name" name="name" autoComplete="name" placeholder="Tu nombre" required minLength={2} maxLength={80} />
        </Field>
        <Field label="Correo" htmlFor="email">
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required maxLength={160} />
        </Field>
      </div>
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
          <option>Sistema GIS</option>
          <option>IA / Computer Vision</option>
          <option>Agente y automatización</option>
          <option>API / Backend</option>
          <option>Otro</option>
        </select>
      </Field>
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
          Al enviar aceptas que use tus datos únicamente para responder esta solicitud.
        </p>
        <Button type="submit" size="lg" disabled={isLoading} className="sm:min-w-40">
          {isLoading ? (
            <>
              <LoaderCircle className="animate-spin" /> Enviando
            </>
          ) : (
            <>
              Enviar mensaje <ArrowRight />
            </>
          )}
        </Button>
      </div>

      <div className="min-h-10" aria-live="polite">
        <AnimatePresence mode="wait">
          {status.state === "success" || status.state === "error" ? (
            <motion.div
              key={status.state}
              initial={reduceMotion ? false : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs ${
                status.state === "success"
                  ? "bg-emerald-50 text-emerald-800"
                  : "bg-red-50 text-red-700"
              }`}
              role={status.state === "error" ? "alert" : "status"}
            >
              {status.state === "success" ? <CheckCircle2 className="size-4" /> : <AlertCircle className="size-4" />}
              {status.message}
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
