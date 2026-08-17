"use client";

import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useI18n } from "@/lib/i18n";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion";
import { DemoGallery } from "./demo-gallery";

export function DemoShowcase() {
  const { t } = useI18n();

  return (
    <section id="demo" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cta">
            {t.demos.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.demos.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.demos.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup as="ul" className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.demos.items.map((demo) => (
            <StaggerItem as="li" key={demo.id}>
              <article className="group flex h-full flex-col">
                <DemoGallery images={demo.gallery} title={demo.title} />
                <div className="flex flex-1 flex-col px-1 pt-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide">
                    <span className="text-cta">{demo.serviceType}</span>
                    <span className="text-border" aria-hidden="true">
                      /
                    </span>
                    <span className="text-muted-foreground">{demo.niche}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{demo.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta transition-colors hover:text-cta/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {t.demos.visitLabel}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={waLink(t.wa.demo(demo.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <WhatsAppIcon className="size-3.5" aria-hidden="true" />
                      {t.demos.askLabel}
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn
          delay={0.1}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-center md:flex-row md:p-10 md:text-left"
        >
          <div>
            <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl">
              {t.demos.ctaBand.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
              {t.demos.ctaBand.description}
            </p>
          </div>
          <a
            href={waLink(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
          >
            <WhatsAppIcon className="size-4" aria-hidden="true" />
            {t.demos.ctaBand.ctaLabel}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
