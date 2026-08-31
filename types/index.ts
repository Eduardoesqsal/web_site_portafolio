import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Technology = {
  name: string;
  short: string;
};

export type TechCategory = {
  name: string;
  description: string;
  technologies: Technology[];
};

export type ProjectVisual = "map" | "face" | "cad" | "commerce" | "agro" | "data" | "photogrammetry";

export type Project = {
  name: string;
  category: string;
  description: string;
  problem: string;
  technologies: string[];
  visual: ProjectVisual;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  confidential?: boolean;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DevelopmentType = {
  title: string;
  description: string;
  technologies: string[];
};

export type Review = {
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};
