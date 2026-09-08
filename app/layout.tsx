import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { companyConfig } from "@/lib/company-data";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${companyConfig.name} - Desarrollo web e IA`,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.description,
  keywords: [
    "desarrollo web",
    "inteligencia artificial",
    "automatizacion",
    "e-commerce",
    "producto digital",
    "Next.js",
    "React",
    "TypeScript",
    "Mexico",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: companyConfig.name,
    title: `${companyConfig.name} - Desarrollo web e IA`,
    description: companyConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.name} - Desarrollo web e IA`,
    description: companyConfig.description,
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#07131d" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyConfig.name,
  url: siteConfig.url,
  description: companyConfig.description,
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagramHref],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <a
          href="#contenido"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-[#07131d] px-4 py-2 text-xs font-semibold text-white transition focus:translate-y-0"
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
