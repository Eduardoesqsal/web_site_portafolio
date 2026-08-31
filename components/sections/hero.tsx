"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  Code2,
  Download,
  Expand,
  Github,
  Globe2,
  Linkedin,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, stats } from "@/lib/site-data";

const orbitItems = [
  { label: "Product", icon: Globe2, className: "left-[2%] top-[46%]", delay: 0 },
  { label: "AI", icon: BrainCircuit, className: "right-[7%] top-[11%]", delay: 0.8 },
  { label: "Code", icon: Code2, className: "bottom-[11%] right-[1%]", delay: 1.4 },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [photoAvailable, setPhotoAvailable] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (!profileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProfileOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [profileOpen]);

  return (
    <section
      id="inicio"
      className="hero-surface noise relative isolate min-h-screen overflow-hidden pt-28 text-white sm:pt-32"
    >
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -left-40 top-10 -z-10 size-[34rem] rounded-full bg-[#b8ff3d]/8 blur-[120px]" />
      <div className="absolute -right-40 top-28 -z-10 size-[38rem] rounded-full bg-[#b8ff3d]/10 blur-[130px]" />
      <div className="absolute left-[58%] top-[14%] -z-10 h-[28rem] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/15 to-transparent" />

      <div className="container-site grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-12 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-16 lg:pt-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/45">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#b8ff3d] opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#b8ff3d]" />
            </span>
            Disponible para proyectos selectos
            <span className="hidden h-px w-12 bg-white/15 sm:block" />
            <span className="hidden text-white/25 sm:block">México · Remoto</span>
          </div>

          <p className="mb-4 font-mono text-[11px] uppercase tracking-[.18em] text-[#b8ff3d]">
            {"// full stack · ai · product · geospatial"}
          </p>
          <h1 className="max-w-[48rem] text-balance text-[clamp(3.4rem,8.5vw,7.6rem)] font-semibold leading-[.84] tracking-[-0.08em]">
            Desarrollo software para convertir ideas en <span className="relative inline-block text-[#b8ff3d]">productos funcionales<span className="absolute -bottom-2 left-0 h-1 w-2/3 rounded-full bg-[#b8ff3d]/40" /></span>.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Aporto desarrollo full stack, automatización, visión por computadora y soluciones
            geoespaciales cuando el proyecto lo necesita. Trabajo para que el producto quede
            <span className="text-white"> claro, estable y fácil de usar.</span>
          </p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/30">
              Stack principal
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "PostGIS",
                "Computer Vision",
                "LLMs",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[9px] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#proyectos">
                Explorar mi trabajo
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/api/cv" download>
                <Download />
                Descargar CV
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/35">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#b8ff3d]" />
              {siteConfig.location}
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#b8ff3d]" /> Español · Inglés básico-intermedio
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[540px] lg:ml-auto"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-[2%] rounded-full border border-dashed border-white/15"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[10%] rounded-full border border-[#b8ff3d]/30"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8ff3d] shadow-[0_0_20px_#b8ff3d]" />
            <span className="absolute bottom-[8%] right-[11%] size-2 rounded-full bg-violet-400 shadow-[0_0_18px_#a78bfa]" />
          </motion.div>
          <div className="absolute inset-[17%] rounded-full bg-gradient-to-br from-[#b8ff3d] via-white/80 to-violet-500 p-[3px] shadow-[0_0_90px_rgba(184,255,61,.12)]">
            <motion.button
              type="button"
              layoutId="profile-orb"
              className="group noise relative size-full cursor-zoom-in overflow-hidden rounded-full border-[8px] border-[#101210] bg-[#151815] text-left outline-none focus-visible:ring-4 focus-visible:ring-[#b8ff3d]/60"
              onClick={() => setProfileOpen(true)}
              whileHover={reduceMotion ? undefined : { scale: 0.985 }}
              aria-label="Abrir perfil de Eduardo"
            >
              <ProfileImage photoAvailable={photoAvailable} setPhotoAvailable={setPhotoAvailable} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/5" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 pb-9 text-[10px] font-semibold uppercase tracking-[.16em] text-white/0 transition duration-300 group-hover:translate-y-0 group-hover:text-white">
                Ver perfil <Expand className="size-3" />
              </div>
            </motion.button>
          </div>

          {orbitItems.map(({ label, icon: Icon, className, delay }) => (
            <motion.div
              key={label}
              className={`absolute z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 p-2 pr-3 shadow-2xl backdrop-blur-xl ${className}`}
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 4.5 + delay, delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <span className="grid size-9 place-items-center rounded-full bg-white/8 text-[#b8ff3d]">
                <Icon className="size-4" />
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-white/75">{label}</span>
            </motion.div>
          ))}

          <div className="absolute bottom-[1%] left-[15%] z-20 rounded-full border border-white/15 bg-white px-4 py-2.5 text-[10px] font-semibold text-black shadow-[0_18px_45px_rgba(0,0,0,.35)]">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-emerald-500" />
            Systems online
          </div>
        </motion.div>
      </div>

      <div className="container-site border-t border-white/10 py-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.value} className="flex items-center gap-4 sm:justify-center sm:border-r sm:border-white/10 last:border-0">
              <span className="font-mono text-[9px] text-[#b8ff3d]">0{index + 1}</span>
              <div>
                <p className="text-sm font-semibold tracking-tight text-white">{stat.value}</p>
                <p className="mt-0.5 text-[10px] text-white/35">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="absolute bottom-4 right-6 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/30 transition hover:text-[#b8ff3d] xl:flex"
      >
        Scroll to explore <ArrowDown className="size-3.5 animate-bounce" />
      </a>

      <AnimatePresence>
        {profileOpen ? (
          <ProfileModal
            photoAvailable={photoAvailable}
            setPhotoAvailable={setPhotoAvailable}
            onClose={() => setProfileOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ProfileImage({
  photoAvailable,
  setPhotoAvailable,
}: {
  photoAvailable: boolean;
  setPhotoAvailable: (available: boolean) => void;
}) {
  return (
    <>
      <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_25%,#3b4434_0%,#191d18_48%,#0d0f0d_100%)]">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(184,255,61,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(184,255,61,.15)_1px,transparent_1px)] [background-size:28px_28px]" />
        <span className="relative text-7xl font-semibold tracking-[-0.1em] text-white/20 sm:text-8xl">
          {siteConfig.shortName}
        </span>
      </div>
      {photoAvailable ? (
        <Image
          src={siteConfig.profilePhoto}
          alt={`Fotografía de ${siteConfig.name}`}
          fill
          priority
          sizes="(max-width: 640px) 68vw, (max-width: 1024px) 360px, 390px"
          className="object-cover object-center"
          onError={() => setPhotoAvailable(false)}
        />
      ) : null}
    </>
  );
}

function ProfileModal({
  photoAvailable,
  setPhotoAvailable,
  onClose,
}: {
  photoAvailable: boolean;
  setPhotoAvailable: (available: boolean) => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/80 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-title"
    >
      <motion.div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#111311] shadow-[0_40px_120px_rgba(0,0,0,.7)]"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-[#b8ff3d]"
          aria-label="Cerrar perfil"
          autoFocus
        >
          <X className="size-4" />
        </button>
        <div className="grid md:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-80 overflow-hidden bg-[#191d18] md:min-h-[31rem]">
            <ProfileImage photoAvailable={photoAvailable} setPhotoAvailable={setPhotoAvailable} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#b8ff3d]">Currently building</p>
              <p className="mt-2 text-sm font-medium text-white">Software que conecta datos con decisiones.</p>
            </div>
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <div className="mb-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.18em] text-white/35">
              <span className="size-1.5 rounded-full bg-[#b8ff3d]" /> Profile / 001
            </div>
            <h2 id="profile-title" className="text-3xl font-semibold leading-none tracking-[-.05em] sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mt-3 text-sm font-medium text-[#b8ff3d]">{siteConfig.role}</p>
            <p className="mt-6 text-sm leading-7 text-white/50">
              Combino ingeniería y pensamiento de producto para convertir necesidades concretas
              en experiencias claras y fáciles de usar. Trabajo principalmente en web, automatización,
              IA y soluciones geoespaciales cuando el proyecto lo requiere.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2">
              {["Full Stack", "IA aplicada", "Computer Vision", "Geoespacial"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[.035] px-3 py-3 text-[10px] font-medium text-white/60"
                >
                  <Sparkles className="mb-2 size-3.5 text-[#b8ff3d]" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              <Button asChild size="sm">
                <a href="#contacto" onClick={onClose}>
                  Hablemos <ArrowRight />
                </a>
              </Button>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="modal-social" aria-label="GitHub">
                <Github />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="modal-social" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
