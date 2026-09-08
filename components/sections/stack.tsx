import {
  BrainCircuit,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  Map,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { techCategories } from "@/lib/site-data";

const categoryIcons = [Code2, ServerCog, Database, Map, BrainCircuit, CloudCog];

export function Stack() {
  const allTechnologies = techCategories.flatMap((category) => category.technologies);

  return (
    <section id="stack" className="noise relative overflow-hidden bg-[#07131d] text-white">
      <div className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-[#18d38a]/15 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-[#18c7d6]/8 blur-[120px]" />
      <div className="section-space container-site relative z-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="02 / Stack tecnológico"
              title="Herramientas que hablan entre sí."
              description="Un ecosistema moderno para diseñar interfaces, mover datos, entrenar modelos y mantener productos confiables en producción. También uso herramientas espaciales cuando el problema lo requiere."
              invert
            />
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[.14em] text-white/35">
              <Sparkles className="size-3.5 text-[#18c7d6]" /> Siempre aprendiendo
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex];
            return (
              <Reveal key={category.name} delay={categoryIndex * .045}>
                <article className="group relative h-full min-h-64 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#18c7d6]/45 hover:bg-white/[.06] sm:p-6">
                  <div className="absolute -right-12 -top-12 size-40 rounded-full border border-white/5 transition duration-700 group-hover:scale-125 group-hover:border-[#18c7d6]/15" />
                  <div className="relative flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-full border border-white/10 bg-black/30 text-[#18c7d6] transition duration-300 group-hover:rotate-6 group-hover:bg-[#18c7d6] group-hover:text-black">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[8px] text-white/20">0{categoryIndex + 1} <ChevronRight className="size-3.5 transition group-hover:translate-x-1 group-hover:text-[#18c7d6]" /></span>
                  </div>
                  <div className="relative mt-8">
                    <h3 className="text-xl font-semibold tracking-[-.03em]">{category.name}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/35">{category.description}</p>
                  </div>
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {category.technologies.map((technology) => (
                      <div key={technology.name} className="flex items-center gap-2 rounded-full border border-white/8 bg-black/20 py-1.5 pl-1.5 pr-2.5 transition hover:border-white/20 hover:bg-black/40" title={technology.name}>
                        <span className="grid size-6 place-items-center rounded-full bg-white/8 font-mono text-[7px] font-bold text-[#18c7d6]">{technology.short}</span>
                        <span className="font-mono text-[8px] font-medium text-white/45">{technology.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/8 py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center">
          {[...allTechnologies, ...allTechnologies].map((technology, index) => (
            <div key={`${technology.name}-${index}`} className="flex items-center">
              <span className="mx-7 font-mono text-[9px] uppercase tracking-[.18em] text-white/20">{technology.name}</span>
              <span className="size-1.5 rotate-45 bg-[#18c7d6]/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
