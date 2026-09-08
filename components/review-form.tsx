"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (rating === 0) {
      setTried(true);
      setSent(false);
      return;
    }
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const text = String(formData.get("review") ?? "").trim();

    const message = [
      `*Reseña / crítica sobre tu trabajo*`,
      ``,
      `Estrellas: ${rating}/5`,
      name ? `Nombre: ${name}` : "Nombre: (sin nombre)",
      ``,
      `Comentario: ${text}`,
    ].join("\n");

    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTried(false);
    form.reset();
    setRating(0);
    setHovered(0);
  }

  const showError = tried && rating === 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <span className="mb-2 block text-xs font-semibold text-neutral-700">Calificación</span>
        <div className="flex items-center gap-1" role="radiogroup" aria-label="Calificación estrellas">
          {[1, 2, 3, 4, 5].map((value) => {
            const filled = value <= (hovered || rating);
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={rating === value}
                aria-label={`${value} de 5 estrellas`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(0)}
                className="outline-none focus-visible:ring-2 focus-visible:ring-[#18c7d6] focus-visible:ring-offset-2"
              >
                <Star
                  className={cn(
                    "size-8 transition-transform duration-200 hover:scale-110",
                    filled ? "fill-[#18c7d6] text-[#18c7d6]" : "fill-none text-black/15",
                  )}
                />
              </button>
            );
          })}
        </div>
        {showError ? <p className="mt-2 text-[10px] text-red-600">Selecciona entre 1 y 5 estrellas.</p> : null}
      </div>

      <Field label="Tu nombre" htmlFor="review-name">
        <Input id="review-name" name="name" placeholder="Nombre (opcional)" autoComplete="name" maxLength={80} />
      </Field>

      <Field label="Qué opinas de mi trabajo" htmlFor="review-text">
        <Textarea
          id="review-text"
          name="review"
          placeholder="¿Cómo fue trabajar conmigo? ¿Qué te gustó y qué podrías sugerir?"
          required
          minLength={10}
          maxLength={2000}
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Sitio web de empresa</label>
        <input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[10px] leading-4 text-neutral-400">
          Tu reseña se enviará por WhatsApp, sin costo para ti.
        </p>
        <Button type="submit" size="lg" disabled={showError} className="sm:min-w-40">
          <MessageCircle /> Enviar crítica
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
              className="flex items-center gap-2 rounded-xl bg-[#eef7f8] px-3 py-2.5 text-xs text-[#0d1d28]"
              role="status"
            >
              <CheckCircle2 className="size-4" /> Gracias. Se abrió WhatsApp con tu reseña lista para enviar.
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
