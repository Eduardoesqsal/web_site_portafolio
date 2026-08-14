"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "li";
}>;

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
