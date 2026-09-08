import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Button } from "@/components/ui/button";
import { companyConfig } from "@/lib/company-data";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: `${siteConfig.name} - Portafolio`,
  description:
    "Portafolio personal con proyectos, experiencia, servicios y casos seleccionados en desarrollo, IA y geoespacial.",
};

export default function PortfolioPage() {
  return (
    <main id="contenido">
      <div className="fixed left-4 top-4 z-50 sm:left-6 sm:top-6">
        <Button asChild size="sm" variant="outline" className="shadow-lg shadow-black/20 backdrop-blur">
          <Link href="/">
            <ArrowLeft />
            Volver a {companyConfig.name}
          </Link>
        </Button>
      </div>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Reviews />
      <Services />
      <Contact />
    </main>
  );
}
