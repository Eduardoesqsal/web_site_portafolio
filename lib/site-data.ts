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
    "Desarrollo productos digitales que convierten datos complejos, imágenes y procesos manuales en software claro, rápido y útil.",
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
  { value: "GeoAI", label: "Datos con contexto espacial" },
  { value: "AI Agents", label: "Automatización inteligente" },
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
    description: "Datos transaccionales y geoespaciales.",
    technologies: [
      { name: "PostgreSQL", short: "Pg" },
      { name: "PostGIS", short: "Gis" },
      { name: "Supabase", short: "Sb" },
    ],
  },
  {
    name: "GIS",
    description: "Visualización y análisis espacial en la web.",
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
    name: "GeoSpatial Data Hub",
    category: "Infraestructura geoespacial",
    description:
      "Plataforma para publicar, explorar y analizar capas geográficas desde una interfaz web de alto rendimiento.",
    problem:
      "Centraliza información dispersa y permite tomar decisiones territoriales con una única fuente de verdad.",
    technologies: ["Next.js", "PostGIS", "FastAPI", "OpenLayers", "Docker"],
    visual: "map",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
    featured: true,
  },
  {
    name: "Vision Access",
    category: "Computer Vision",
    description:
      "Sistema de reconocimiento facial con registro de eventos, validación en tiempo real y panel de auditoría.",
    problem:
      "Automatiza controles de identidad preservando trazabilidad y reduciendo tiempos de acceso.",
    technologies: ["Python", "YOLO", "FastAPI", "React.js", "PostgreSQL"],
    visual: "face",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
    featured: true,
  },
  {
    name: "CAD Copilot",
    category: "Agente de IA",
    description:
      "Agente capaz de interpretar instrucciones en lenguaje natural y ejecutar flujos de dibujo técnico en CAD.",
    problem:
      "Reduce tareas repetitivas de dibujo, estandariza entregables y acelera iteraciones de diseño.",
    technologies: ["Python", "LLMs", "AutoCAD API", "FastAPI", "Agents"],
    visual: "cad",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
    featured: true,
  },
  {
    name: "Nómada Commerce",
    category: "E-commerce",
    description:
      "Experiencia de compra headless con catálogo dinámico, pagos, inventario y panel de operación.",
    problem:
      "Convierte una operación manual en un canal de venta medible, rápido y escalable.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    visual: "commerce",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
  },
  {
    name: "Crop Intelligence",
    category: "IA para agricultura",
    description:
      "Análisis de ortomosaicos para detectar cultivos, segmentar zonas y estimar indicadores agronómicos.",
    problem:
      "Transforma vuelos de dron en información accionable para agricultura de precisión.",
    technologies: ["YOLO", "Segmentation", "Metashape", "PostGIS", "Python"],
    visual: "agro",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
  },
  {
    name: "Spatial ETL Monitor",
    category: "Data Engineering",
    description:
      "Pipeline automatizado para validar, transformar y sincronizar grandes volúmenes de datos espaciales.",
    problem:
      "Evita errores silenciosos y convierte procesos GIS de horas en flujos observables y repetibles.",
    technologies: ["Python", "PostgreSQL", "PostGIS", "Docker", "GitHub Actions"],
    visual: "data",
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
    role: "Geospatial Software Developer",
    company: "Proyectos GIS & agricultura",
    description:
      "Construcción de visores, procesos geoespaciales y automatizaciones para convertir imágenes aéreas en decisiones.",
    highlights: ["PostGIS", "Ortomosaicos", "Web mapping"],
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
    title: "Sistemas GIS",
    description: "Visores, análisis espacial, PostGIS e infraestructuras de datos geográficos.",
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
    title: "Geo + visión",
    description: "Mapas, ortomosaicos e imágenes convertidos en herramientas operativas.",
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
