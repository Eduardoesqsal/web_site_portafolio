import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Desarrollador de software`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Desarrollador Full Stack especializado en productos web, inteligencia artificial, visión por computadora, automatización y soluciones geoespaciales cuando aportan valor.",
  keywords: [
    "desarrollador full stack",
    "desarrollador de software",
    "inteligencia artificial aplicada",
    "computer vision",
    "automatización",
    "PostGIS",
    "React",
    "Next.js",
    "FastAPI",
    "México",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Software para el mundo real`,
    description:
      "Productos web, automatización e inteligencia artificial diseñados para resolver problemas reales.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Desarrollador de software`,
    description: "Desarrollo web, inteligencia artificial aplicada y automatización.",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f8" },
    { media: "(prefers-color-scheme: dark)", color: "#101412" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Desarrollador de software",
  knowsAbout: [
    "Full Stack Development",
    "Software Architecture",
    "Artificial Intelligence",
    "Computer Vision",
    "React",
    "Python",
    "PostGIS",
  ],
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <a
          href="#contenido"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
