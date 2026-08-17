"use client";

import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";
import { motion, useReducedMotion } from "motion/react";
import { viewportOnce } from "@/components/motion/transitions";

export function Footer() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.15 }}
      className="border-t border-border bg-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">
            {t.site.role} — {t.site.serviceArea}
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <li>
            <a
              href={waLink(t.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-11 items-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {siteConfig.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {year} {siteConfig.name}.
        </p>
      </div>
    </motion.footer>
  );
}
