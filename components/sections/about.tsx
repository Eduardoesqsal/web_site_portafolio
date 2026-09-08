import { ArrowUpRight, Check, Code2, CornerDownRight, Layers3, Terminal } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { developmentTypes, specialtyCards } from "@/lib/site-data";

const principles = ["Entender antes de construir", "Diseñar para las personas", "Medir el impacto real"];

export function About() {
  return (
    <section id="sobre-mi" className="section-space relative overflow-hidden bg-[#f4fafb]">
      <div className="absolute right-0 top-0 h-px w-1/3 bg-black/20" />
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end lg:gap-20">
          <Reveal>
            <div className="section-kicker">
              <SectionHeading eyebrow="01 / Sobre mí" title="Entender el problema. Construir con claridad." />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-3xl text-pretty text-2xl font-medium leading-[1.3] tracking-[-0.04em] text-neutral-900 sm:text-3xl lg:text-[2.55rem]">
              Soy desarrollador de software con experiencia construyendo productos full stack y entrenando
              inteligencia artificial para resolver problemas
              <span className="mx-2 inline-block -rotate-1 bg-[#18c7d6] px-2 text-white">reales</span>.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-auto gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="noise relative h-full min-h-[32rem] overflow-hidden rounded-[2rem] bg-[#0d0f0d] p-6 text-white sm:p-9">
              <div className="blueprint-grid absolute inset-0 opacity-55" />
              <div className="absolute -right-24 -top-24 size-80 rounded-full bg-[#18d38a]/15 blur-[90px]" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">
                    <Terminal className="size-3.5 text-[#18c7d6]" /> developer.profile
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] text-[#18d38a]">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#18d38a]" /> RUNNING
                  </span>
                </div>

                <div className="grid flex-1 items-center gap-10 py-10 sm:grid-cols-[1fr_.8fr]">
                  <div>
                    <p className="font-mono text-[10px] text-[#18c7d6]">01 — FILOSOFÍA</p>
                    <h3 className="mt-4 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-4xl">
                      Entiendo el contexto antes de elegir una solución.
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                      He llevado proyectos de idea a producción combinando HTML, CSS, JavaScript, React, TypeScript,
                      Next.js, Express, PostgreSQL, Python, FastAPI, Flask y Supabase, con servidores Linux,
                      contenedores en Docker y pipelines de CI/CD (GitHub Actions) para desplegar en AWS con
                      confianza. También desarrollo y entreno modelos de inteligencia artificial (computer vision,
                      agentes y LLMs) para aplicarlos a necesidades concretas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <div className="mb-4 flex gap-1.5">
                      <span className="size-2 rounded-full bg-red-400/70" />
                      <span className="size-2 rounded-full bg-amber-400/70" />
                      <span className="size-2 rounded-full bg-[#18d38a]/70" />
                    </div>
                    <div className="space-y-3 font-mono text-[9px] leading-5">
                      <p><span className="text-[#18d38a]">const</span> approach = {"{"}</p>
                      <p className="pl-4 text-white/45">problem: <span className="text-[#18c7d6]">&quot;understood&quot;</span>,</p>
                      <p className="pl-4 text-white/45">experience: <span className="text-[#18c7d6]">&quot;human&quot;</span>,</p>
                      <p className="pl-4 text-white/45">impact: <span className="text-[#18c7d6]">&quot;measurable&quot;</span></p>
                      <p>{"}"};</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#proyectos"
                  className="group inline-flex w-fit items-center gap-2 border-b border-[#18c7d6]/40 pb-1 text-xs font-semibold text-[#18c7d6] transition hover:border-[#18c7d6]"
                >
                  Verlo en acción
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <article className="h-full rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[.18em] text-black/35">Principios de trabajo</span>
                <Code2 className="size-4 text-black/30" />
              </div>
              <ul className="mt-7 space-y-3">
                {principles.map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-black/8 bg-[#f4f4ee] p-3.5 text-sm font-medium text-neutral-700 transition hover:translate-x-1 hover:border-black/20 hover:bg-[#18c7d6] hover:text-black"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-black text-[8px] font-bold text-white group-hover:rotate-6">
                      0{index + 1}
                    </span>
                    {item}
                    <Check className="ml-auto size-3.5 opacity-30" />
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            <article className="relative h-full overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0f1d27_0%,#123140_45%,#08302c_100%)] p-6 text-white sm:p-8">
              <div className="absolute -bottom-16 -right-10 size-56 rounded-full border-[34px] border-white/10" />
              <div className="relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/50">Experiencia aplicada</span>
                <p className="mt-8 max-w-sm text-xl font-medium leading-snug tracking-tight">
                  Visión computacional, agentes, Office, AutoCAD y soluciones geoespaciales cuando aportan valor.
                </p>
                <p className="mt-4 text-xs leading-6 text-white/55">
                  Tecnologías distintas. Un mismo objetivo: eliminar fricción y desbloquear valor.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between border-t border-black/10 pt-6">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[.18em] text-black/35">Cómo desarrollo software</span>
                <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-.04em] text-neutral-900 sm:text-4xl">
                  Tipos de desarrollo que domino
                </h3>
              </div>
              <Layers3 className="hidden size-7 text-black/30 sm:block" />
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {developmentTypes.map((type, index) => (
              <Reveal key={type.title} delay={(index % 2) * 0.06}>
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-black/10 bg-[#e9e9e1] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,.08)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid size-10 place-items-center rounded-full bg-black font-mono text-[10px] text-[#18c7d6]">
                      0{index + 1}
                    </span>
                    <CornerDownRight className="size-4 text-black/20 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-black" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900">{type.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/45">{type.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[.14em] text-black/35">Tecnologías</span>
                    {type.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-neutral-700 transition group-hover:border-black/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {specialtyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <div className="group flex h-full min-h-56 flex-col rounded-[1.75rem] border border-black/10 bg-[#e9e9e1] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,.08)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid size-11 place-items-center rounded-full bg-black text-[#18c7d6] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-5" />
                    </div>
                    <CornerDownRight className="size-4 text-black/20 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-black" />
                  </div>
                  <div className="mt-auto pt-10">
                    <span className="font-mono text-[8px] text-black/30">0{index + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/45">{card.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
