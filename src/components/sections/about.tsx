"use client";

import Image from "next/image";
import { BadgeCheck, GraduationCap, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PHOTO_SRC, fullName } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion";

export function About() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="tentang" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="relative aspect-square">
                <Image
                  src={PHOTO_SRC}
                  alt={t.hero.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{fullName}</h3>
                <p className="mt-1 text-sm text-cta">{t.site.role}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {t.site.location} — {t.site.serviceArea.replace("Remote — ", "")}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-3">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-cta">
                {t.about.eyebrow}
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.about.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t.about.summary}
              </p>
              <blockquote className="mt-6 border-l-4 border-cta/60 pl-4 text-pretty italic leading-relaxed text-foreground/80">
                {t.about.philosophy}
              </blockquote>
            </FadeIn>

            <StaggerGroup as="ul" className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.about.highlights.map((highlight) => (
                <StaggerItem
                  as="li"
                  key={highlight.id}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-cta" aria-hidden="true" />
                    {highlight.title}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-muted-foreground">{highlight.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h3 className="text-xl font-bold text-foreground">{t.about.careerTitle}</h3>
            <ol className="mt-6 space-y-0 border-l-2 border-border pl-6">
              {t.about.timeline.map((job) => (
                <li key={job.id} className="relative pb-8 last:pb-0">
                  {job.id === "hyperscal" && !prefersReducedMotion ? (
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 1.45, 1], opacity: [1, 0.55, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1.5 -left-[31px] size-2.5 rounded-full border-2 border-background bg-cta"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 -left-[31px] size-2.5 rounded-full border-2 border-background bg-cta"
                    />
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {job.period}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-foreground">
                    {job.role} — {job.org}
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn>
            <h3 className="text-xl font-bold text-foreground">{t.about.techTitle}</h3>
            <div className="mt-6 space-y-5">
              {t.about.skillGroups.map((group) => (
                <div
                  key={group.id}
                  className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"
                >
                  <h4 className="w-36 shrink-0 pt-1 text-sm font-semibold text-foreground">
                    {group.title}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16">
          <h3 className="text-xl font-bold text-foreground">{t.about.educationTitle}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.about.education.map((item) => (
              <div key={item.id} className="rounded-2xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <GraduationCap className="size-4 shrink-0 text-cta" aria-hidden="true" />
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.org} — {item.period}
                </p>
                {item.note && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
