"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import { LanguageToggle } from "./language-toggle";

export function Navbar() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dark = !scrolled;

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        dark ? "border-primary-foreground/10 bg-primary text-primary-foreground" : "border-border/70 bg-background/80"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          className="flex flex-col leading-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span className={`text-base font-bold tracking-tight ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            {siteConfig.shortName}
          </span>
          <span className={`text-xs ${dark ? "hidden" : "text-muted-foreground"}`}>
            {t.site.role} — {t.site.tagline}
          </span>
        </a>
        <div className="flex items-center gap-2">
          <NavLinks className="hidden md:block" dark={dark} />
          <LanguageToggle dark={dark} />
          <a
            href={waLink(t.wa.consultation)}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-11 items-center rounded-lg px-4 text-sm font-semibold transition-all hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer ${
              dark
                ? "hidden"
                : "hidden bg-cta text-cta-foreground hover:opacity-90 md:inline-flex"
            }`}
          >
            {t.nav.cta}
          </a>
          <MobileMenu dark={dark} />
        </div>
      </div>
    </motion.header>
  );
}
