import {
  Blocks,
  Braces,
  BrainCircuit,
  CloudCog,
  CodeXml,
  Globe2,
  Map,
  ServerCog,
  Sparkles,
} from "lucide-react";
import type {
  DevelopmentType,
  Experience,
  NavItem,
  Project,
  Review,
  Service,
  TechCategory,
} from "@/types";

export const siteConfig = {
  name: "DEV Eduardo Esquivel Salaszar",
  shortName: "DEV",
  role: "Desarrollador de software",
  profilePhoto: "/edwin.jpeg",
  description:
    "Desarrollo productos digitales que convierten procesos, datos e ideas en software claro, rápido y útil.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
  email: "hola@tudominio.com",
  location: "México · Disponible en remoto",
  github: "https://github.com/Eduardoesqsal",
  linkedin:
    "https://www.linkedin.com/in/eduardo-salazar-89b805225?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  whatsapp: "https://wa.me/524272989094",
  whatsappLabel: "+52 427 298 9094",
  instagramHref: "https://instagram.com/eduardoesqsal",
} as const;

export const navigation: NavItem[] = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Reseñas", href: "#resenas" },
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
      { name: "QGIS", short: "Qg" },
      { name: "PostGIS", short: "Pg" },
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
    description: "Infraestructura en Linux, contenedores y entrega continua lista para producción.",
    technologies: [
      { name: "Linux", short: "Ln" },
      { name: "Docker", short: "Dk" },
      { name: "CI/CD", short: "CI" },
      { name: "GitHub Actions", short: "GA" },
      { name: "AWS", short: "Aws" },
      { name: "Git", short: "Git" },
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
    category: "Geoportal geoespacial",
    description:
      "Geoportal para visualización espacial con backend propio y entrenamiento de algoritmos de visión por computadora. Proyecto confidencial: comparto imágenes y videos de referencia, el código interno no es público.",
    problem:
      "Transforma imágenes aéreas en información útil para análisis técnico y toma de decisiones.",
    technologies: ["Python", "PostGIS", "FastAPI", "OpenLayers", "Computer Vision"],
    visual: "map",
    demoUrl: "#contacto",
    githubUrl: siteConfig.github,
    confidential: true,
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
    description: "Plataformas completas, desde estrategia y UX hasta despliegue en producción.",
    icon: CodeXml,
  },
  {
    title: "Frontend",
    description: "Interfaces rápidas, responsivas y cuidadas para que la experiencia se sienta sólida.",
    icon: Braces,
  },
  {
    title: "Backend & APIs",
    description: "Servicios robustos, integraciones y arquitecturas preparadas para escalar.",
    icon: ServerCog,
  },
  {
    title: "Móvil Android",
    description: "Aplicaciones móviles Android pensadas para operación, usuarios finales y crecimiento.",
    icon: Globe2,
  },
  {
    title: "Ciencia de datos",
    description: "Análisis, visualización y decisiones guiadas por datos útiles para negocio.",
    icon: Map,
  },
  {
    title: "IA y automatización",
    description: "Modelos a medida, visión por computadora y automatización con agentes.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & DevOps",
    description: "Servidores Linux, contenedores Docker, CI/CD y despliegues para entregar con confianza.",
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

export const developmentTypes: DevelopmentType[] = [
  {
    title: "Desarrollo de software frontend",
    description:
      "Construyo interfaces rápidas, accesibles y responsivas que convierten una idea en un producto que la gente usa con gusto.",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "WordPress"],
  },
  {
    title: "Desarrollo de software backend",
    description:
      "Diseño APIs y servicios seguros que sostienen la lógica de negocio detrás de cada producto, desde la base de datos hasta la respuesta.",
    technologies: ["Python", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    title: "Desarrollo y entrenamiento de inteligencia artificial",
    description:
      "Desarrollo y entreno modelos de IA sobre datos reales para automatizar decisiones y procesos repetitivos.",
    technologies: ["Python", "LLMs", "AI Agents", "Fine-tuning", "Entrenamiento a medida"],
  },
  {
    title: "Visión por computadora",
    description:
      "Entreno algoritmos que interpretan imágenes, detectan objetos y convierten lo visual en información útil y accionable.",
    technologies: ["Python", "YOLO", "Segmentación", "OpenCV", "Entrenamiento con datos propios"],
  },
  {
    title: "Desarrollo de software geoespacial",
    description:
      "Integro mapas y análisis espacial dentro del producto para dar contexto territorial a las decisiones.",
    technologies: ["PostGIS", "Leaflet", "OpenLayers", "QGIS", "IDE"],
  },
  {
    title: "De páginas estáticas a aplicaciones web",
    description:
      "Despliego proyectos completos, desde una página estática hasta una aplicación con backend, base de datos y automatizaciones, con servidores Linux, contenedores en Docker, pipelines de CI/CD y despliegues en AWS.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Linux", "Docker", "CI/CD", "AWS"],
  },
];

export const reviews: Review[] = [
  {
    name: "Mariana G.",
    role: "Product Manager · Proyecto e-commerce",
    rating: 5,
    text: "Impecable. Entendió rápido el flujo de compra, entregó una tienda rápida y bien cuidada y resolvió cada duda con claridad. Volvería a trabajar con él sin pensarlo.",
  },
  {
    name: "Carlos R.",
    role: "Cliente · Identificación biométrica",
    rating: 5,
    text: "El sistema de identificación quedó justo como lo necesitábamos. Muy buena comunicación, entregas a tiempo y atención al detalle en la trazabilidad de eventos.",
  },
  {
    name: "Ana L.",
    role: "Operaciones · Geoportal",
    rating: 5,
    text: "Tomó un proceso técnico complejo de análisis espacial y lo convirtió en una herramienta clara. Sabía exactamente qué preguntar para despejar el camino.",
  },
];
