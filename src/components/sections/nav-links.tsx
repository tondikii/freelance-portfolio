"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function NavLinks({ className, dark = false }: { className?: string; dark?: boolean }) {
  const { t } = useI18n();
  const [active, setActive] = useState<string>("");

  const items = t.nav.items;

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={t.nav.mainNavAria} className={className}>
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={cn(
                "inline-flex h-11 items-center rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active === item.href
                  ? dark
                    ? "text-primary-foreground"
                    : "text-foreground"
                  : dark
                    ? "text-primary-foreground/65 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
