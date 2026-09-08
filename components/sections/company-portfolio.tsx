import Link from "next/link";
import { Boxes, CloudCog, GitBranch, Github, Rocket, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { companyConfig } from "@/lib/company-data";

const workflow = [
  "Next.js / React / TypeScript",
  "Backend APIs / automatización",
  "Android / ciencia de datos / IA",
  "Docker / CI/CD / GitHub Actions",
] as const;

const engineeringSignals = [
  {
    title: "Arquitectura",
    description: "Frontend, backend y datos organizados como un sistema mantenible.",
    icon: Boxes,
  },
  {
    title: "Entrega continua",
    description: "GitHub Actions, build reproducible y despliegue controlado.",
    icon: CloudCog,
  },
  {
    title: "Gestión real",
    description: "Git, GitHub Projects, issues y seguimiento de entregables.",
    icon: GitBranch,
  },
  {
    title: "Automatización",
    description: "Flujos que reducen trabajo manual y aceleran operación.",
    icon: Workflow,
  },
] as const;

export function CompanyPortfolio() {
  return (
    <section id="portafolio" className="section-space bg-[#07131d] text-white">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="02 / Ingeniería"
              title="La empresa trabaja como un equipo de software serio."
              description="Aquí mostramos cómo se estructura el trabajo: arquitectura, herramientas, control de versiones y entrega continua."
              invert
            />
            <Button asChild size="sm" variant="outline">
              <Link href={companyConfig.portfolioHref}>Ver portafolio personal</Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-6 shadow-[0_30px_90px_rgba(0,0,0,.18)]">
              <p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200">
                Stack operativo
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-.05em]">
                Software hecho para producir, escalar y mantenerse ordenado.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Dev Technology integra interfaz, lógica, despliegue y control de proceso en una
                sola dirección técnica. No solo entregamos pantallas: entregamos sistemas.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {workflow.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[9px] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Eduardoesqsal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-teal-950 transition hover:-translate-y-0.5"
                >
                  <Github className="size-3.5" />
                  GitHub
                </a>
                <Button asChild size="sm" variant="secondary">
                  <Link href={companyConfig.portfolioHref}>Abrir portafolio personal</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,.18)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200">
                  Flujo de trabajo
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[8px] text-white/60">
                  CI / CD / Docker / Git
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {engineeringSignals.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[.035] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-white/8 text-[#18c7d6]">
                        <Icon className="size-5" />
                      </div>
                      <Rocket className="size-4 text-white/20" />
                    </div>
                    <h4 className="mt-4 text-sm font-semibold text-white">{title}</h4>
                    <p className="mt-2 text-xs leading-6 text-white/55">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-[#18c7d6]/20 bg-[linear-gradient(145deg,rgba(24,199,214,.12)_0%,rgba(24,211,138,.08)_100%)] p-5">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-[#18c7d6]">
                  <CloudCog className="size-3.5" /> DevOps checklist
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Dockerized environments",
                    "GitHub Actions",
                    "Git history limpio",
                    "GitHub Projects",
                    "Deploy reproducible",
                    "Observabilidad básica",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70"
                    >
                      <span className="size-1.5 rounded-full bg-[#18d38a]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[.035] p-5 shadow-[0_25px_70px_rgba(0,0,0,.18)] lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#0f1d27_0%,#123140_45%,#08302c_100%)] p-6 text-white">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200">
                <Github className="size-3.5" /> GitHub / Projects
              </div>
              <h3 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-.05em]">
                Ordenamos el trabajo para entregar con claridad.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Seguimiento por issues, tareas, commits, ramas y tableros. Así el proceso de
                desarrollo se ve profesional desde el inicio hasta el despliegue.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Repos", "Código estructurado"],
                ["Issues", "Tareas claras"],
                ["Projects", "Seguimiento visual"],
                ["Release", "Entrega controlada"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="rounded-[1.4rem] border border-white/10 bg-[#0b1720] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#18c7d6]">0{index + 1}</span>
                    <span className="size-3 rounded-full bg-[#18d38a]" />
                  </div>
                  <p className="mt-5 text-base font-semibold text-white">{title}</p>
                  <p className="mt-3 text-xs leading-6 text-white/50">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
