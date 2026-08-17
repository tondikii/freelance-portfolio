import type { Transition, Variants } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_EXIT = [0.7, 0, 0.84, 0] as const;

export const durations = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
} as const;

export const enterTransition: Transition = {
  duration: durations.base,
  ease: EASE_OUT,
};

export const exitTransition: Transition = {
  duration: durations.fast,
  ease: EASE_EXIT,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: enterTransition },
};

export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: enterTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};
