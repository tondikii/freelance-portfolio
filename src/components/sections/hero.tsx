"use client";

import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HERO_PHOTO_SRC, siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useI18n();
  const initial = prefersReducedMotion ? false : undefined;

  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col items-center justify-between overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:py-10">
        <div className="relative grid w-full flex-grow grid-cols-1 items-center lg:grid-cols-3">
          <motion.div
            initial={initial ?? { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.35 }}
            className="z-20 order-2 text-center lg:order-1 lg:text-left"
          >
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-primary-foreground/75 md:mx-0">
              {t.hero.subheadline}
            </p>
            <a
              href="#demo"
              className="mt-4 inline-block min-h-11 text-sm font-medium text-primary-foreground underline decoration-from-font underline-offset-4 transition-colors hover:text-hero-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </a>
          </motion.div>

          <div className="relative order-1 flex h-[min(58svh,540px)] items-center justify-center lg:order-2 lg:h-full">
            <motion.div
              initial={initial ?? { scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReducedMotion ? 0 : 0.15,
              }}
              className="absolute z-0 size-[min(72vw,300px)] rounded-full bg-hero-accent/90 md:size-[400px] lg:size-[500px]"
            />
            <motion.div
              initial={initial ?? { opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReducedMotion ? 0 : 0.35,
              }}
              className="relative z-10 h-auto w-[min(82vw,24rem)] shrink-0 md:w-[32rem] lg:w-[36rem]"
            >
              <Image
                src={HERO_PHOTO_SRC}
                alt={t.hero.photoAlt}
                width={700}
                height={700}
                loading="eager"
                fetchPriority="high"
                unoptimized
                className="hero-portrait-fade h-auto w-full"
              />
            </motion.div>
          </div>

          <motion.div
            initial={initial ?? { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.55 }}
            className="z-20 order-3 flex items-center justify-center text-center lg:justify-start lg:text-left"
          >
            <h1 className="text-[clamp(2.25rem,3.25vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary-foreground">
              {t.hero.overlayPart1}
              <br />
              {t.hero.overlayPart2}
            </h1>
          </motion.div>
        </div>

        <motion.footer
          initial={initial ?? { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.7 }}
          className="z-30 flex w-full items-center justify-between border-t border-primary-foreground/15 pt-4 text-primary-foreground/65"
        >
          <div className="flex items-center gap-1">
            <a
              href={waLink(t.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground cursor-pointer"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={siteConfig.email}
              className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground cursor-pointer"
            >
              <Mail className="size-5" aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs font-medium sm:text-sm">{t.site.location}</p>
        </motion.footer>
      </div>
    </section>
  );
}
