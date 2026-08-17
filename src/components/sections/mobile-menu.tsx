"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";
import { exitTransition, fadeUp } from "@/components/motion/transitions";

export function MobileMenu({ dark = false }: { dark?: boolean }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex size-11 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer ${
          dark
            ? "text-primary-foreground hover:bg-primary-foreground/10"
            : "text-foreground hover:bg-muted"
        }`}
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            exit={{ opacity: 0, y: -8, transition: exitTransition }}
            variants={fadeUp}
            className={`absolute inset-x-0 top-full border-b backdrop-blur ${
              dark
                ? "border-primary-foreground/10 bg-primary/95"
                : "border-border bg-background/95"
            }`}
          >
            <nav aria-label={t.nav.mobileNavAria}>
              <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
                {t.nav.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex h-11 items-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        dark
                          ? "text-primary-foreground hover:bg-primary-foreground/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 pb-1">
                  <a
                    href={waLink(t.wa.consultation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex h-11 items-center justify-center rounded-lg bg-cta px-4 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {t.nav.cta}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
