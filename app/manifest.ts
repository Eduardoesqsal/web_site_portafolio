import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DEV Eduardo Esquivel Salaszar — Desarrollador de software",
    short_name: "DEV Eduardo",
    description: "Portafolio de desarrollo Full Stack, inteligencia artificial y automatización.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4fafb",
    theme_color: "#07131d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
