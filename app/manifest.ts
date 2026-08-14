import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eduardo Esquivel Salaszar — Desarrollador de software",
    short_name: "Eduardo Esquivel",
    description: "Portafolio de desarrollo Full Stack, geoespacial e inteligencia artificial.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9f8",
    theme_color: "#101412",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
