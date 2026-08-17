"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "./transitions";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

export function StaggerGroup({ children, className, as = "div" }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Component = motion[as];

  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}
