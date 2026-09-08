import { ArrowUpRight, Github, Lightbulb, Lock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="proyectos" className="section-space overflow-hidden bg-[#f4f4ee]">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 border-b border-black/15 pb-10 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="03 / Trabajo seleccionado"
              title="Proyectos desarrollados para necesidades concretas."
              description="Sistemas diseñados alrededor de una necesidad concreta: producto, automatización, interfaces y agentes que ejecutan trabajo real."
            />
            <a href="#contacto" className="focus-ring group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-black px-5 py-3 text-xs font-semibold text-white transition hover:bg-[linear-gradient(145deg,#0f1d27_0%,#123140_45%,#08302c_100%)] md:self-auto">
              Tengo un reto <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * .06}>
              <article className="project-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white transition duration-500 hover:-translate-y-2 hover:border-black/20 hover:shadow-[0_35px_90px_rgba(0,0,0,.15)]">
                <div className="shine-hover relative overflow-hidden border-b border-black/10">
                  <div className="transition duration-700 group-hover:scale-[1.025]">
                    <ProjectVisual type={project.visual} />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.14em] text-white backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-[#18c7d6]" /> Project / 0{index + 1}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[.16em] text-[#0e8e9a]">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-[1.7rem]">{project.name}</h3>
                    </div>
                    <a href={project.demoUrl} className="grid size-11 shrink-0 place-items-center rounded-full border border-black/10 bg-[#f4f4ee] transition group-hover:rotate-6 group-hover:border-black group-hover:bg-[#18c7d6]" aria-label={`Ver ${project.name}`}>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-black/50">{project.description}</p>
                  {project.confidential ? (
                    <div className="mt-5 flex items-start gap-2.5 border-l-2 border-[#18c7d6] bg-[#eef7f8] px-4 py-3">
                      <Lock className="mt-0.5 size-3.5 shrink-0 text-[#0e8e9a]" />
                      <p className="text-[11px] leading-5 text-black/50">
                        Proyecto confidencial. Por política del cliente solo comparto imágenes y
                        videos de referencia; el código y los datos internos no son públicos.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-5 flex items-start gap-2.5 border-l-2 border-[#18c7d6] bg-[#f4f4ee] px-4 py-3">
                      <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-black" />
                      <p className="text-[11px] leading-5 text-black/50">{project.problem}</p>
                    </div>
                  )}

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span key={technology} className="rounded-full border border-black/10 px-2.5 py-1 font-mono text-[8px] text-black/45">{technology}</span>
                      ))}
                    </div>
                    {project.confidential ? (
                      <span className="focus-ring inline-flex items-center gap-1.5 rounded text-[10px] font-semibold text-black/35">
                        <Lock className="size-3.5" /> Solo visuales
                      </span>
                    ) : (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded text-[10px] font-semibold text-black/35 transition hover:text-black">
                        <Github className="size-3.5" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
