import { ArrowUpRight, Clock3, Github, Linkedin, MapPin, MessageCircle, MessageSquareText } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contacto" className="noise relative overflow-hidden bg-[#18c7d6] py-20 text-black sm:py-28 lg:py-36">
      <div className="absolute -left-28 -top-28 size-[28rem] rounded-full border-[60px] border-white/20" />
      <div className="absolute -bottom-36 right-[15%] size-[32rem] rounded-full border border-black/10" />
      <div className="container-site relative z-10">
        <div className="mb-10 flex items-center gap-3 border-b border-black/15 pb-5 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-black/45">
          <span className="size-1.5 rounded-full bg-black" /> 07 / Contacto
        </div>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/15 bg-white/30 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[.14em]">
                <MessageSquareText className="size-3.5" /> Abierto a colaborar
              </div>
              <h2 className="mt-7 text-balance text-5xl font-semibold leading-[.87] tracking-[-0.07em] sm:text-7xl lg:text-[6.4rem]">
                Ã‚Â¿QuÃƒÂ© vamos a construir?
              </h2>
              <p className="mt-7 max-w-md text-pretty text-sm leading-7 text-black/55 sm:text-base">
                CuÃƒÂ©ntame el problema, incluso si todavÃƒÂ­a no tienes definida la soluciÃƒÂ³n. Te responderÃƒÂ© con preguntas claras y un siguiente paso concreto.
              </p>

              <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-black p-3 text-sm text-white/70 transition hover:-translate-y-0.5 hover:text-white">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10"><MessageCircle className="size-4 text-[#18c7d6]" /></span>
                  <span><span className="block font-mono text-[7px] uppercase tracking-widest text-white/30">WhatsApp</span>{siteConfig.whatsappLabel}</span>
                  <ArrowUpRight className="ml-auto size-3.5 text-white/25 transition group-hover:text-[#18c7d6]" />
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-black/15 bg-white/30 p-3 text-sm text-black/60">
                  <span className="grid size-10 place-items-center rounded-xl bg-black text-[#18c7d6]"><MapPin className="size-4" /></span>
                  <span><span className="block font-mono text-[7px] uppercase tracking-widest text-black/35">UbicaciÃƒÂ³n</span>{siteConfig.location}</span>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="inline-flex items-center gap-2 text-[10px] text-black/45"><Clock3 className="size-3.5" /> Respondo en menos de 24h</span>
                <span className="ml-auto flex gap-2">
                  <a href={siteConfig.github} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-black/20 transition hover:rotate-6 hover:bg-black hover:text-[#18c7d6]" aria-label="GitHub"><Github className="size-3.5" /></a>
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full border border-black/20 transition hover:-rotate-6 hover:bg-black hover:text-[#18c7d6]" aria-label="LinkedIn"><Linkedin className="size-3.5" /></a>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <div className="overflow-hidden rounded-[2rem] border border-black/15 bg-white text-neutral-950 shadow-[0_35px_90px_rgba(0,0,0,.16)]">
              <div className="flex items-center justify-between border-b border-black/10 bg-[#f4f4ee] px-5 py-4 sm:px-8">
                <div className="flex gap-1.5"><span className="size-2 rounded-full bg-red-400" /><span className="size-2 rounded-full bg-amber-400" /><span className="size-2 rounded-full bg-[#18d38a]" /></div>
                <p className="font-mono text-[8px] uppercase tracking-[.16em] text-black/35">new-project.request</p>
                <span className="font-mono text-[8px] text-[#0e8e9a]">SECURE</span>
              </div>
              <div className="p-5 sm:p-8">
                <div className="mb-7">
                  <p className="text-xl font-semibold tracking-tight">Inicia una conversaciÃƒÂ³n</p>
                  <p className="mt-1 text-xs text-neutral-500">Sin compromiso. Primero entendemos el reto.</p>
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
