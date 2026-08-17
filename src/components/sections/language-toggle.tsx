"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const next = lang === "id" ? "en" : "id";

  return (
    <button
      type="button"
      aria-label={t.nav.languageLabel}
      onClick={() => setLang(next)}
      className={`inline-flex h-11 items-center gap-1.5 rounded-md px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer ${
        dark
          ? "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span className="uppercase">{lang}</span>
    </button>
  );
}
