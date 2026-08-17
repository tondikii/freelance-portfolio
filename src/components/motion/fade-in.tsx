"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "./transitions";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "span" | "li";
};

export function FadeIn({ children, className, delay = 0, as = "div" }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
