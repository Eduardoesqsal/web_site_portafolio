import { ArrowUpRight, BriefcaseBusiness, Check, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/site-data";

export function Experience() {
  return (
    <section id="experiencia" className="section-space relative overflow-hidden bg-white">
      <div className="absolute -left-32 top-28 size-80 rounded-full bg-violet-100 blur-[100px]" />
      <div className="container-site relative">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="04 / Experiencia"
                title="Aprender haciendo. Mejorar lanzando."
                description="Una trayectoria en la intersección entre software, datos e inteligencia artificial aplicada."
              />
              <div className="mt-9 rounded-[1.75rem] bg-[#b8ff3d] p-6">
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-black text-[#b8ff3d]"><GraduationCap className="size-5" /></span>
                  <ArrowUpRight className="size-4 text-black/30" />
                </div>
                <p className="mt-10 text-xl font-semibold leading-tight tracking-tight">La curiosidad también forma parte del stack.</p>
                <p className="mt-3 text-xs leading-6 text-black/55">Formación continua en arquitectura de software, IA, producto y sistemas geoespaciales.</p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-black/10 sm:left-[27px]" />
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.period}-${experience.role}`} delay={index * .08}>
                <article className="group relative grid grid-cols-[48px_1fr] gap-4 pb-5 last:pb-0 sm:grid-cols-[56px_1fr] sm:gap-6">
                  <div className="relative z-10 grid size-12 place-items-center rounded-full border border-black/10 bg-white text-black/35 shadow-sm transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-[#b8ff3d] sm:size-14">
                    <BriefcaseBusiness className="size-4" />
                  </div>
                  <div className="rounded-[1.75rem] border border-black/10 bg-[#f4f4ee] p-5 transition duration-500 group-hover:-translate-y-1 group-hover:border-black/20 group-hover:bg-white group-hover:shadow-[0_24px_60px_rgba(0,0,0,.08)] sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[.16em] text-violet-600">{experience.company}</p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-.035em] sm:text-2xl">{experience.role}</h3>
                      </div>
                      <span className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-1.5 font-mono text-[8px] text-black/45">{experience.period}</span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-black/50">{experience.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="inline-flex items-center gap-1.5 rounded-full bg-black px-2.5 py-1.5 font-mono text-[8px] text-white/65">
                          <Check className="size-3 text-[#b8ff3d]" /> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
