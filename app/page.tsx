import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";

export default function HomePage() {
  return (
    <main id="contenido">
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
