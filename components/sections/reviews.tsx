import { MessageCircle, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ReviewForm } from "@/components/review-form";
import { SectionHeading } from "@/components/section-heading";
import { reviews } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn("size-3.5", star <= value ? "fill-[#18c7d6] text-amber-950" : "fill-none text-white/25")}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const average = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="resenas" className="noise relative overflow-hidden bg-[#0a0b0a] py-20 text-white sm:py-28 lg:py-36">
      <div className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-[#18c7d6]/8 blur-[130px]" />
      <div className="absolute -left-32 top-24 size-[28rem] rounded-full bg-[#18d38a]/15 blur-[130px]" />
      <div className="container-site relative z-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="06 / Reseñas"
              title="Lo que dicen de trabajar conmigo."
              description="Críticas honestas sobre proyectos, comunicación y calidad del trabajo. Tu opinión me ayuda a mejorar."
              invert
            />
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4">
              <span className="text-4xl font-semibold tracking-tight text-[#18c7d6]">{average}</span>
              <div>
                <Stars value={Math.round(Number(average))} />
                <p className="mt-1 text-[10px] text-white/40">{reviews.length} reseñas</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {reviews.map((review, index) => (
                <article
                  key={review.name}
                  className={cn(
                    "relative h-full overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 sm:p-7",
                    index === 0
                      ? "border-[#18c7d6]/35 bg-[#18c7d6]/[.07]"
                      : "border-white/10 bg-white/[.035] hover:border-white/20",
                  )}
                >
                  <Quote className="absolute right-5 top-5 size-6 text-white/10" />
                  <Stars value={review.rating} />
                  <p className="mt-4 text-sm leading-6 text-white/70">{review.text}</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs font-semibold text-white">{review.name}</p>
                    <p className="mt-0.5 text-[10px] text-white/35">{review.role}</p>
                  </div>
                </article>
              ))}
              <button
                type="button"
                className="group flex min-h-48 flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-dashed border-white/20 p-6 text-center transition hover:border-[#18c7d6]/50 hover:bg-white/[.03]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[#18c7d6] text-black transition group-hover:scale-110">
                  <MessageCircle className="size-5" />
                </span>
                <p className="text-xs text-white/45">Tu reseña puede aparecer aquí después de enviarla por WhatsApp.</p>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111311] shadow-[0_35px_90px_rgba(0,0,0,.35)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[.04] px-5 py-4 sm:px-7">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-red-400/70" />
                  <span className="size-2 rounded-full bg-amber-400/70" />
                  <span className="size-2 rounded-full bg-[#18d38a]/70" />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-[.16em] text-white/35">new.review.request</p>
                <span className="font-mono text-[8px] text-[#18c7d6]">5 estrellas MAX</span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="mb-6">
                  <p className="text-xl font-semibold tracking-tight">Deja tu crítica</p>
                  <p className="mt-1 text-xs text-white/45">Las estrellas son opcionales pero ayudan. Todo llega por WhatsApp.</p>
                </div>
                <ReviewForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}