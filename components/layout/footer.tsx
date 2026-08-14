import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="container-site py-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white text-xs font-bold text-neutral-950">
                {siteConfig.shortName}
              </span>
              <span className="text-base font-semibold">{siteConfig.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              Desarrollo de software, datos geoespaciales e inteligencia artificial para resolver
              problemas reales.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navegación de pie de página">
            {navigation.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="text-xs text-white/50 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {siteConfig.name}. Diseñado y desarrollado con intención.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="social-icon" aria-label="Correo">
              <Mail />
            </a>
            <a href="#inicio" className="social-icon ml-2" aria-label="Volver arriba">
              <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
