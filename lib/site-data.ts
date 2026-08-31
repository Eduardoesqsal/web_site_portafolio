import {
  Blocks,
  Bot,
  Braces,
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  CodeXml,
  Database,
  DraftingCompass,
  Globe2,
  Layers3,
  Map,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import type {
  Experience,
  NavItem,
  Project,
  Service,
  TechCategory,
} from "@/types";

export const siteConfig = {
  name: "Eduardo Esquivel Salaszar",
  shortName: "EES",
  role: "Desarrollador de software",
  profilePhoto: "/eduardo-esquivel.jpg",
  description:
    "Desarrollo productos digitales que convierten procesos, datos e ideas en software claro, rápido y útil.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hola@tudominio.com",
  location: "México · Disponible en remoto",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
} as const;

export const navigation: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
];

export const stats = [
  { value: "Full Stack", label: "Producto de punta a punta" },
  { value: "IA aplicada", label: "Automatización con criterio" },
  { value: "Geoespacial", label: "Análisis espacial cuando aporta valor" },
] as const;

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    description: "Interfaces rápidas, accesibles y mantenibles.",
    technologies: [
      { name: "React.js", short: "Re" },
      { name: "Next.js", short: "Nx" },
      { name: "TypeScript", short: "TS" },
      { name: "Tailwind CSS", short: "Tw" },
      { name: "JavaScript", short: "JS" },
      { name: "WordPress", short: "Wp" },
    ],
  },
  {
    name: "Backend",
    description: "Servicios seguros y APIs listas para crecer.",
    technologies: [
      { name: "Python", short: "Py" },
      { name: "FastAPI", short: "Fa" },
      { name: "Flask", short: "Fl" },
      { name: "Express.js", short: "Ex" },
      { name: "REST API", short: "API" },
    ],
  },
  {
    name: "Bases de datos",
    description: "Datos transaccionales y espaciales cuando el proyecto lo necesita.",
    technologies: [
      { name: "PostgreSQL", short: "Pg" },
      { name: "PostGIS", short: "Gis" },
      { name: "Supabase", short: "Sb" },
    ],
  },
  {
    name: "Geoespacial",
    description: "Visualización y análisis espacial integrados al producto.",
    technologies: [
      { name: "Leaflet", short: "Lf" },
      { name: "OpenLayers", short: "OL" },
      { name: "Ortomosaicos", short: "Or" },
      { name: "Metashape API", short: "Ag" },
      { name: "IDE", short: "IDE" },
    ],
  },
  {
    name: "IA",
    description: "Modelos, visión y agentes que operan procesos.",
    technologies: [
      { name: "Computer Vision", short: "CV" },
      { name: "YOLO", short: "Yo" },
      { name: "Segmentación", short: "Sg" },
      { name: "AI Agents", short: "AI" },
      { name: "LLMs", short: "LLM" },
    ],
  },
  {
    name: "DevOps & Cloud",
    description: "Entregas reproducibles y operación confiable.",
    technologies: [
      { name: "Docker", short: "Dk" },
      { name: "Git", short: "Git" },
      { name: "GitHub", short: "Gh" },
      { name: "Vercel", short: "▲" },
      { name: "Cloud", short: "Cl" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Urbano Shoes",
    category: "E-commerce de calzado",
    description:
      "Tienda en línea para calzado urbano con catálogo, navegación rápida y experiencia de compra clara.",
    problem:
      "Convierte un catálogo de productos en una experiencia de venta simple y fácil de administrar.",
    technologies: ["Next.js", "Stripe", "Supabase", "Tailwind", "TypeScript"],
    visual: "commerce",
    demoUrl: "https://white-kicks.netlify.app",
    githubUrl: siteConfig.github,
    featured: true,
  },
  {
    name: "BioID System",
    category: "Identificación biométrica",
    description:
      "Sistema de identificación de datos biométricos con validación, trazabilidad y panel de control.",
    problem:
      "Reduce fricción en procesos de identificación y conserva control sobre los eventos registrados.",
    technologies: ["Python", "YOLO", "FastAPI", "React.js", "PostgreSQL"],
    visual: "face",
    demoUrl: "https://face-biometric-a-i-1.onrender.com/",
    githubUrl: siteConfig.github,
    featured: true,
  },
  {
    name: "GeoField App",
    category: "Geoportal / ortomosaicos",
    description:
      "Geoportal para análisis de ortomosaicos con backend propio y entrenamiento de algoritmos de visión por computadora.",
    problem:
      "Transforma imágenes aéreas en información útil para análisis técnico y toma de decisiones.",
    technologies: ["Python", "PostGIS", "FastAPI", "OpenLayers", "Computer Vision"],
    visual: "map",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
  },
  {
    name: "AutoDraft AI",
    category: "Agente de IA",
    description:
      "Agente de inteligencia artificial para dibujo en AutoCAD que interpreta instrucciones y ejecuta tareas repetitivas.",
    problem:
      "Acelera trabajo técnico de dibujo y estandariza entregables dentro de un flujo guiado por IA.",
    technologies: ["Python", "LLMs", "AutoCAD API", "FastAPI", "Agents"],
    visual: "cad",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
  },
  {
    name: "PhotoFlow Portal",
    category: "Procesamiento fotogramétrico",
    description:
      "Portal web para procesamiento fotogramétrico con seguimiento de tareas, estados y resultados.",
    problem:
      "Organiza un flujo técnico que normalmente se dispersa entre pasos manuales y archivos separados.",
    technologies: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "React.js"],
    visual: "photogrammetry",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
  },
];

export const experiences: Experience[] = [
  {
    period: "2024 — Actual",
    role: "Full Stack & AI Developer",
    company: "Consultoría independiente",
    description:
      "Diseño y desarrollo de productos web, agentes inteligentes y sistemas de visión por computadora para operaciones reales.",
    highlights: ["Arquitectura de producto", "APIs e integraciones", "Modelos de IA"],
  },
  {
    period: "2022 — 2024",
    role: "Software Developer",
    company: "Proyectos reales de producto",
    description:
      "Construcción de productos web, procesos de datos y automatizaciones; también trabajé con soluciones geoespaciales cuando el proyecto lo requería.",
    highlights: ["PostGIS", "Automatización", "Web mapping"],
  },
  {
    period: "2020 — 2022",
    role: "Web Developer",
    company: "Productos digitales",
    description:
      "Desarrollo de sitios, dashboards y backends orientados a rendimiento, mantenibilidad y experiencia de usuario.",
    highlights: ["React.js", "Python", "REST APIs"],
  },
];

export const services: Service[] = [
  {
    title: "Productos web",
    description: "Aplicaciones y plataformas completas, desde estrategia y UX hasta producción.",
    icon: CodeXml,
  },
  {
    title: "APIs & Backend",
    description: "Servicios robustos, integraciones y arquitecturas preparadas para escalar.",
    icon: ServerCog,
  },
  {
    title: "Datos espaciales",
    description: "Mapas, PostGIS y análisis espacial cuando aportan valor al producto.",
    icon: Map,
  },
  {
    title: "Inteligencia Artificial",
    description: "Modelos a medida, visión por computadora y entrenamiento con datos propios.",
    icon: BrainCircuit,
  },
  {
    title: "Agentes & automatización",
    description: "Agentes que conectan IA con Excel, AutoCAD, Office y procesos internos.",
    icon: Bot,
  },
  {
    title: "Dashboards de datos",
    description: "Información compleja convertida en interfaces claras para decidir más rápido.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Frontend",
    description: "Interfaces React accesibles, responsivas y optimizadas para conversión.",
    icon: Braces,
  },
  {
    title: "Cloud & DevOps",
    description: "Contenedores, despliegues y flujos automatizados para entregar con confianza.",
    icon: CloudCog,
  },
];

export const specialtyCards = [
  {
    title: "Ingeniería de producto",
    description: "Frontend, backend y datos alineados con un resultado de negocio.",
    icon: Blocks,
  },
  {
    title: "Datos + visión",
    description: "Imágenes, analítica y automatización convertidas en herramientas operativas.",
    icon: Globe2,
  },
  {
    title: "IA aplicada",
    description: "Automatización práctica con modelos, agentes y flujos auditables.",
    icon: Sparkles,
  },
] as const;

export const capabilityIcons = [
  DraftingCompass,
  ShoppingBag,
  Layers3,
  Database,
  Workflow,
] as const;
