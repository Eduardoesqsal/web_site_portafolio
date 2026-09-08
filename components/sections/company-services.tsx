import { ArrowUpRight, Check, Layers3 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { companyConfig, companyProcess, companyServices } from "@/lib/company-data";

export function CompanyServices() {
  return (
    <section id="servicios" className="section-space bg-[#f4faf9]">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-teal-900/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="01 / Servicios"
              title="Lo que Dev Technology construye para tu empresa."
              description="Diseño software que comunica mejor, vende mejor y ordena mejor tu operación."
            />
            <Button asChild variant="secondary" size="sm" className="self-start lg:self-auto">
              <a href={companyConfig.portfolioHref}>Ver portafolio</a>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.05}>
                <article className="group h-full rounded-[1.75rem] border border-teal-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,.04)] transition duration-500 hover:-translate-y-1 hover:border-teal-700/20 hover:shadow-[0_25px_70px_rgba(15,23,42,.08)]">
                  <div className="flex items-start justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-teal-950 text-cyan-200 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[9px] text-teal-700">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-.04em] text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div
            id="proceso"
            className="mt-10 grid gap-4 rounded-[2rem] border border-teal-900/10 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.05)] lg:grid-cols-[.78fr_1.22fr]"
          >
            <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#0d2d2b_0%,#12423f_45%,#08302c_100%)] p-6 text-white">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200">
                <Layers3 className="size-3.5" /> Proceso
              </div>
              <h3 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-.05em]">
                Una forma simple de pasar de la idea al lanzamiento con Dev Technology.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Trabajo con entregas visibles para que sepas en qué punto está el proyecto y qué
                sigue después.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {companyProcess.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.4rem] border border-teal-900/10 bg-[#f6fbfa] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-teal-700">0{index + 1}</span>
                    <Check className="size-3.5 text-teal-600" />
                  </div>
                  <p className="mt-5 text-base font-semibold text-neutral-950">{step.title}</p>
                  <p className="mt-3 text-xs leading-6 text-neutral-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-full border border-teal-900/10 bg-white px-5 py-4 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-neutral-950">¿Necesitas una propuesta o una cotización?</p>
            <p className="mt-1 text-xs text-neutral-500">Cuéntame el alcance y te respondo con un siguiente paso claro.</p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-teal-950 px-5 py-3 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-800"
          >
            Empezar ahora <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
