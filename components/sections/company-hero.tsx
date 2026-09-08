import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyConfig, companyPillars, companyStats } from "@/lib/company-data";

export function CompanyHero() {
  return (
    <section
      id="inicio"
      className="hero-surface noise relative isolate min-h-screen overflow-hidden pt-28 text-white sm:pt-32"
    >
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -left-40 top-10 -z-10 size-[34rem] rounded-full bg-[#18c7d6]/8 blur-[120px]" />
      <div className="absolute -right-40 top-28 -z-10 size-[38rem] rounded-full bg-[#18d38a]/10 blur-[130px]" />
      <div className="absolute left-[58%] top-[14%] -z-10 h-[28rem] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/15 to-transparent" />

      <div className="container-site flex min-h-[calc(100vh-8rem)] flex-col items-center gap-10 pb-12 pt-8 text-center lg:gap-12 lg:pb-16 lg:pt-10">
        <div className="relative aspect-square w-full max-w-[min(72vw,420px)]">
          <div className="absolute inset-[2%] rounded-full border border-dashed border-white/15" />
          <div className="absolute inset-[10%] rounded-full border border-[#18c7d6]/30">
            <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18c7d6] shadow-[0_0_20px_#18c7d6]" />
            <span className="absolute bottom-[8%] right-[11%] size-2 rounded-full bg-[#18d38a] shadow-[0_0_18px_#18d38a]" />
          </div>
          <div className="absolute inset-[17%] rounded-full bg-gradient-to-br from-[#18c7d6] via-white/80 to-[#18d38a] p-[3px] shadow-[0_0_90px_rgba(24,199,214,.12)]">
            <div className="noise relative size-full overflow-hidden rounded-full border-[8px] border-[#101d28] bg-[#0f1d27]">
              <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_25%,#183140_0%,#0f1d27_48%,#07131d_100%)]">
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(24,199,214,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(24,199,214,.15)_1px,transparent_1px)] [background-size:28px_28px]" />
                <span className="relative text-7xl font-semibold tracking-[-0.1em] text-white/20 sm:text-8xl">
                  {companyConfig.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <Image
                src="/logo.png"
                alt={`${companyConfig.name} logo`}
                fill
                priority
                sizes="(max-width: 640px) 68vw, (max-width: 1024px) 360px, 390px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 pb-9 text-[10px] font-semibold uppercase tracking-[.16em] text-white/0 transition duration-300 hover:translate-y-0 hover:text-white">
                Ver identidad <ArrowRight className="size-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full">
          <div className="mb-7 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/45">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#18c7d6] opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#18c7d6]" />
            </span>
            {companyConfig.tagline}
            <span className="hidden h-px w-12 bg-white/15 sm:block" />
            <span className="hidden text-white/25 sm:block">Mexico · Remoto</span>
          </div>

          <p className="mb-4 font-mono text-[11px] uppercase tracking-[.18em] text-[#18c7d6]">
            {"// web studio · ai · automation · brand systems"}
          </p>
          <h1 className="mx-auto max-w-[48rem] text-balance text-[clamp(3.4rem,8.5vw,7.6rem)] font-semibold leading-[.84] tracking-[-0.08em]">
            Portadas digitales con identidad clara y una marca que se siente consistente.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            La portada de la empresa sigue la misma composicion visual del sitio: logo circular
            protagonista, contraste editorial y una jerarquia pensada para que la marca destaque
            desde el primer vistazo.
            <span className="text-white"> Todo sin perder el estilo profesional del sitio.</span>
          </p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/30">
              Pilares de marca
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {companyPillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[9px] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#contacto">
                Hablemos
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={companyConfig.portfolioHref}>Ver portafolio</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/35">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#18c7d6]" />
              Presencia digital para empresas y marcas
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#18d38a]" /> Sitio limpio, claro y orientado a
              conversion
            </span>
          </div>
        </div>

        <div className="container-site border-t border-white/10 py-6">
          <div className="grid gap-5 sm:grid-cols-3">
            {companyStats.map((stat, index) => (
              <div key={stat.value} className="flex items-center gap-4 sm:justify-center sm:border-r sm:border-white/10 last:border-0">
                <span className="font-mono text-[9px] text-[#18c7d6]">0{index + 1}</span>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] text-white/35">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
