"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { companyNavigation } from "@/lib/company-data";
import { navigation, siteConfig } from "@/lib/site-data";

const portfolioSectionIds = navigation.map((n) => n.href.replace("#", ""));

export function Header() {
  const pathname = usePathname();
  const isPortfolio = pathname === "/portafolio";
  const activeSection = useActiveSection(isPortfolio ? portfolioSectionIds : []);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = isPortfolio
    ? navigation.map((item) => ({
        ...item,
        isActive: activeSection === item.href.replace("#", ""),
      }))
    : companyNavigation.map((item) => ({
        ...item,
        isActive: false,
      }));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#07131d]/88 shadow-lg shadow-black/25 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between sm:h-18">
          <Link
            href={isPortfolio ? "/portafolio" : "/"}
            className="flex items-center gap-2.5"
          >
            <span className="grid size-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,.2)]">
              <Image
                src="/logo.png"
                alt="Dev Technology"
                width={40}
                height={40}
                className="size-full object-cover"
              />
            </span>
            <span className="hidden text-sm font-semibold text-white sm:inline">
              {isPortfolio ? siteConfig.name : "Dev Technology"}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    item.isActive
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}

            {!isPortfolio && (
              <Link
                href="/portafolio"
                className="ml-2 rounded-lg bg-[linear-gradient(135deg,#18c7d6_0%,#18d38a_100%)] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:opacity-95"
              >
                Portafolio
              </Link>
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-9 place-items-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="flex h-full flex-col items-center justify-center gap-2">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full max-w-xs rounded-xl px-5 py-3 text-center text-sm font-medium transition ${
                    item.isActive
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full max-w-xs rounded-xl px-5 py-3 text-center text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}

            {!isPortfolio && (
              <Link
                href="/portafolio"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full max-w-xs rounded-xl bg-[linear-gradient(135deg,#18c7d6_0%,#18d38a_100%)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
              >
                Ver portafolio
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
