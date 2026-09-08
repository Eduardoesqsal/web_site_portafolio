import { ArrowUpRight, Clock3, Github, Mail, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { companyContact } from "@/lib/company-data";

export function CompanyContact() {
  return (
    <section id="contacto" className="section-space bg-[#eef7f6]">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-teal-900/10 pb-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="03 / Contacto"
              title="Cuéntame que necesitas construir."
              description="Si ya tienes una idea, la aterrizamos. Si solo tienes una referencia, la convertimos en una propuesta clara para tu empresa."
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-4 py-2 font-mono text-[9px] uppercase tracking-[.18em] text-teal-700">
              <Clock3 className="size-3.5" /> Respuesta en menos de 24h
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] bg-[linear-gradient(145deg,#0d2d2b_0%,#12423f_45%,#08302c_100%)] p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,.18)] sm:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200">
                Hablemos
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-.05em]">
                Frontend, backend, Android, ciencia de datos o IA.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                Si tu proyecto necesita una presencia digital seria, una automatización interna o
                un producto nuevo, dime en qué punto estás y te respondo con el siguiente paso.
              </p>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {[
                  "Frontend / React / Next.js",
                  "Backend / APIs / Node.js",
                  "Android / móvil",
                  "IA / automatización / agentes",
                  "Docker / CI-CD / GitHub Actions",
                  "Git / GitHub Projects / releases",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/75">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={companyContact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 transition hover:-translate-y-0.5 hover:text-white"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-cyan-200">
                    <MessageCircle className="size-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[7px] uppercase tracking-[.18em] text-white/35">
                      WhatsApp
                    </span>
                    {companyContact.whatsappLabel}
                  </span>
                  <ArrowUpRight className="ml-auto size-3.5 text-white/30 transition group-hover:text-cyan-200" />
                </a>

                <a
                  href={`mailto:${companyContact.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 transition hover:-translate-y-0.5 hover:text-white"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-cyan-200">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[7px] uppercase tracking-[.18em] text-white/35">
                      Correo
                    </span>
                    {companyContact.email}
                  </span>
                  <ArrowUpRight className="ml-auto size-3.5 text-white/30 transition group-hover:text-cyan-200" />
                </a>
              </div>

              <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <span className="mb-2 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[.18em] text-white/35">
                    <MapPin className="size-3.5" /> Ubicación
                  </span>
                  {companyContact.location}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  <span className="mb-2 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[.18em] text-white/35">
                    <Github className="size-3.5" /> Redes
                  </span>
                  <div className="flex items-center gap-3">
                    <a href={companyContact.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                      GitHub
                    </a>
                    <a href={companyContact.linkedin} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-teal-900/10 bg-white shadow-[0_35px_100px_rgba(15,23,42,.08)]">
              <div className="flex items-center justify-between border-b border-teal-900/10 bg-[#f4faf9] px-5 py-4 sm:px-8">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-red-400" />
                  <span className="size-2 rounded-full bg-amber-400" />
                  <span className="size-2 rounded-full bg-emerald-400" />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-[.16em] text-teal-700">
                  new.project.request
                </p>
                <span className="font-mono text-[8px] text-[#0e8e9a]">SECURE</span>
              </div>
              <div className="p-5 sm:p-8">
                <div className="mb-7">
                  <p className="text-xl font-semibold tracking-tight text-neutral-950">
                    Inicia una conversación
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Cuanto más contexto compartas, más aterrizada será la primera respuesta.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
