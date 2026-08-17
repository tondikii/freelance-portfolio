"use client";

import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion";

const stepIcons: LucideIcon[] = [MessageCircle, Palette, Code2, Rocket];

export function Process() {
  const { t } = useI18n();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cta">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.process.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup as="ol" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? MessageCircle;
            return (
              <StaggerItem
                as="li"
                key={step.id}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-6 text-4xl font-extrabold text-muted"
                >
                  {index + 1}
                </span>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                  <Icon className="size-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
