"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check, Layers3, MousePointer2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const phases = ["Descubrir", "DiseÃƒÂ±ar", "Construir", "Lanzar"];

export function Services() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const service = services[active];
  const ActiveIcon = service.icon;

  return (
    <section id="servicios" className="noise relative overflow-hidden bg-[#0a0b0a] py-20 text-white sm:py-28 lg:py-36">
      <div className="absolute -left-32 bottom-0 size-[32rem] rounded-full bg-[#18d38a]/15 blur-[130px]" />
      <div className="absolute -right-32 top-20 size-[30rem] rounded-full bg-[#18c7d6]/8 blur-[130px]" />
      <div className="container-site relative z-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="05 / Servicios"
              title="Una idea. Distintas formas de hacerla real."
              description="Selecciona una especialidad para explorar cÃƒÂ³mo puedo integrarme a tu proyecto o equipo."
              invert
            />
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/30">
              <MousePointer2 className="size-3.5 text-[#18c7d6]" /> Explora el sistema
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Servicios disponibles">
              {services.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={cn(
                      "group flex min-h-16 items-center gap-3 rounded-2xl border px-3 py-2 text-left outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[#18c7d6]",
                      isActive ? "border-[#18c7d6] bg-[#18c7d6] text-black" : "border-white/10 bg-white/[.03] text-white/50 hover:border-white/25 hover:text-white",
                    )}
                  >
                    <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl transition", isActive ? "bg-black text-[#18c7d6]" : "bg-white/5 text-white/45 group-hover:text-[#18c7d6]")}>
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="text-xs font-semibold">{item.title}</span>
                    <span className="ml-auto font-mono text-[8px] opacity-35">0{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={.08}>
            <div className="relative flex min-h-[38rem] h-full overflow-hidden rounded-[2rem] border border-white/12 bg-[#131513] p-6 sm:p-9">
              <div className="blueprint-grid absolute inset-0 opacity-50" />
              <div className="absolute right-[-8%] top-[-8%] size-72 rounded-full border border-[#18c7d6]/20" />
              <div className="absolute right-[3%] top-[3%] size-48 rounded-full border border-dashed border-white/15" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.title}
                  className="relative z-10 flex w-full flex-col"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: .3 }}
                  role="tabpanel"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#18c7d6]">Capability / 0{active + 1}</span>
                    <motion.div initial={reduceMotion ? false : { rotate: -18, scale: .8 }} animate={{ rotate: 0, scale: 1 }} className="grid size-20 place-items-center rounded-full border border-[#18c7d6]/30 bg-[#18c7d6]/10 text-[#18c7d6] shadow-[0_0_50px_rgba(184,255,61,.1)] sm:size-24">
                      <ActiveIcon className="size-9 sm:size-11" />
                    </motion.div>
                  </div>

                  <div className="mt-auto max-w-xl pt-20">
                    <h3 className="text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">{service.title}</h3>
                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/45 sm:text-base">{service.description} Definimos una arquitectura pragmÃƒÂ¡tica y un proceso visible de principio a fin.</p>

                    <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
                      {phases.map((phase, index) => (
                        <div key={phase} className="bg-[#131513] p-3">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="font-mono text-[8px] text-white/25">0{index + 1}</span>
                            <Check className="size-3 text-[#18c7d6]" />
                          </div>
                          <p className="text-[10px] font-medium text-white/60">{phase}</p>
                        </div>
                      ))}
                    </div>

                    <a href="#contacto" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#18c7d6]">
                      Explorar esta soluciÃƒÂ³n <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-5 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[.035] p-5 sm:flex-row sm:px-7">
            <div className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full bg-[#18d38a]/15 text-[#18d38a]"><Layers3 className="size-5" /></span>
              <div>
                <p className="text-sm font-semibold">Ã‚Â¿Tu reto mezcla varias disciplinas?</p>
                <p className="mt-1 text-xs text-white/35">Es lo habitual. DiseÃƒÂ±emos una soluciÃƒÂ³n a tu medida.</p>
              </div>
            </div>
            <a href="#contacto" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#18c7d6] transition hover:gap-3">Evaluar mi proyecto <ArrowDownRight className="size-3.5" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
