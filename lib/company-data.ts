import {
  BrainCircuit,
  CodeXml,
  CloudCog,
  Map,
  ServerCog,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types";
import { siteConfig } from "@/lib/site-data";

export const companyConfig = {
  name: "Dev Technology",
  tagline: "Soluciones tecnológicas inteligentes",
  description:
    "Desarrollo software para automatizar procesos, crear productos digitales y construir soluciones modernas con una estética limpia y clara.",
  portfolioHref: "/portafolio",
  contactHref: "#contacto",
} as const;

export const companyNavigation: Array<{ label: string; href: string }> = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: companyConfig.portfolioHref },
  { label: "Contacto", href: "#contacto" },
];

export const companyStats = [
  { value: "Web + IA", label: "Productos pensados para operar y vender" },
  { value: "Automatización", label: "Menos fricción en procesos repetitivos" },
  { value: "Entrega sólida", label: "CI/CD, Docker y control de versiones" },
] as const;

export const companyServices: Service[] = [
  {
    title: "Frontend",
    description: "Interfaces rápidas, modernas y responsivas para presentar tu negocio con claridad.",
    icon: CodeXml,
  },
  {
    title: "Backend y APIs",
    description: "Arquitectura, integraciones y servicios robustos para sostener el producto.",
    icon: ServerCog,
  },
  {
    title: "Desarrollo móvil Android",
    description: "Aplicaciones móviles para operación, ventas y experiencia de usuario en Android.",
    icon: ShoppingBag,
  },
  {
    title: "Ciencia de datos",
    description: "Análisis, métricas y tableros para tomar decisiones con información útil.",
    icon: Map,
  },
  {
    title: "Inteligencia artificial",
    description: "Asistentes, clasificación, visión por computadora y automatización con modelos.",
    icon: BrainCircuit,
  },
  {
    title: "Agentes y automatización",
    description: "Flujos que conectan datos, documentos y tareas repetitivas con menos esfuerzo.",
    icon: Workflow,
  },
  {
    title: "DevOps & CI/CD",
    description: "Pipelines de integración y despliegue continuo para entregar con seguridad.",
    icon: CloudCog,
  },
  {
    title: "Docker y despliegue",
    description: "Contenedores, entornos reproducibles y puesta en producción controlada.",
    icon: CodeXml,
  },
  {
    title: "GitHub Projects",
    description: "Organización del trabajo, issues, tableros y seguimiento de entregables.",
    icon: ServerCog,
  },
];

export const companyProcess = [
  {
    title: "1. Entender",
    description: "Definimos objetivo, alcance, usuario y el problema real que hay que resolver.",
  },
  {
    title: "2. Diseñar",
    description: "Aterrizo arquitectura, stack y flujo de trabajo antes de escribir una línea de código.",
  },
  {
    title: "3. Construir",
    description: "Desarrollo frontend, backend y automatizaciones con una base técnica clara y mantenible.",
  },
  {
    title: "4. Lanzar",
    description: "Publicamos con Docker, CI/CD y control de versiones para que el despliegue sea confiable.",
  },
  {
    title: "5. Mejorar",
    description: "Medimos, iteramos y mantenemos la solución lista para crecer.",
  },
] as const;

export const companyPillars = [
  "CI/CD",
  "Docker",
  "GitHub Projects",
  "Git",
  "AWS",
] as const;

export const companyContact = {
  whatsapp: siteConfig.whatsapp,
  whatsappLabel: siteConfig.whatsappLabel,
  email: siteConfig.email,
  location: siteConfig.location,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  instagram: siteConfig.instagramHref,
} as const;
