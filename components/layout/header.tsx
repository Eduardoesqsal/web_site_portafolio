"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { navigation, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const sectionIds = useMemo(() => navigation.map((item) => item.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[76rem] items-center justify-between rounded-full border px-2.5 pl-3 transition-all duration-500 sm:pl-4",
          scrolled
            ? "border-black/10 bg-[#f7f7f1]/88 text-black shadow-[0_12px_45px_rgba(0,0,0,.12)] backdrop-blur-xl"
            : "border-white/10 bg-black/20 text-white backdrop-blur-md",
        )}
      >
        <a href="#inicio" className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#b8ff3d]" aria-label={`${siteConfig.name}, volver al inicio`}>
          <span className="grid size-9 place-items-center rounded-full bg-[#b8ff3d] text-[10px] font-black tracking-tight text-black transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            {siteConfig.shortName}
          </span>
          <span className="hidden sm:block">
            <span className="block text-xs font-bold tracking-[-0.02em]">{siteConfig.name}</span>
            <span className={cn("mt-0.5 block font-mono text-[7px] uppercase tracking-[.18em]", scrolled ? "text-black/35" : "text-white/35")}>Software developer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a key={item.href} href={item.href} className={cn(
                "relative rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#b8ff3d]",
                isActive
                  ? scrolled ? "bg-black text-white" : "bg-white/10 text-white"
                  : scrolled ? "text-black/45 hover:text-black" : "text-white/45 hover:text-white",
              )}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contacto"><span>Hablemos</span> <ArrowUpRight /></a>
          </Button>
          <button type="button" className={cn(
            "grid size-10 place-items-center rounded-full border outline-none focus-visible:ring-2 focus-visible:ring-[#b8ff3d] lg:hidden",
            scrolled ? "border-black/10 bg-white text-black" : "border-white/15 bg-white/5 text-white",
          )} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav id="mobile-navigation" className="mx-auto mt-2 max-w-[76rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111311] p-2 text-white shadow-2xl lg:hidden" initial={prefersReducedMotion ? false : { opacity: 0, y: -8, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, scale: .98 }} aria-label="Navegación móvil">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium text-white/65 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>
                <span><span className="mr-3 font-mono text-[8px] text-[#b8ff3d]">0{index + 1}</span>{item.label}</span>
                <ArrowUpRight className="size-4 text-white/25" />
              </a>
            ))}
            <a href="#contacto" className="mt-1 flex items-center justify-center rounded-2xl bg-[#b8ff3d] px-4 py-3.5 text-sm font-semibold text-black" onClick={() => setOpen(false)}>Iniciar un proyecto</a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
