"use client";

import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Globe2,
  LayoutTemplate,
  MessageCircle,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LAUNCH_PROMO_DEADLINE } from "@/content/site";
import { waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/motion";

const serviceIcons: Record<string, LucideIcon> = {
  landing: LayoutTemplate,
  company: Building2,
  booking: CalendarDays,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
  custom: Sparkles,
};

type ServiceCardData = {
  icon: string;
  title: string;
  description: string;
  normalPrice: string;
  promoPrice: string;
};

type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  total: number;
};

function getCountdownParts(): CountdownParts {
  const total = Math.max(0, new Date(LAUNCH_PROMO_DEADLINE).getTime() - Date.now());
  const totalSeconds = Math.floor(total / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    total,
  };
}

function Countdown({
  countdownLabel,
  deadlineLabel,
  expiredLabel,
  daysLabel,
  hoursLabel,
  minutesLabel,
  secondsLabel,
}: {
  countdownLabel: string;
  deadlineLabel: string;
  expiredLabel: string;
  daysLabel: string;
  hoursLabel: string;
  minutesLabel: string;
  secondsLabel: string;
}) {
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const update = () => setParts(getCountdownParts());
    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const values = parts ?? {
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
    total: 1,
  };
  const units = [
    { value: values.days, label: daysLabel },
    { value: values.hours, label: hoursLabel },
    { value: values.minutes, label: minutesLabel },
    { value: values.seconds, label: secondsLabel },
  ];

  return (
    <div className="mt-4">
      {parts?.total === 0 ? (
        <p className="rounded-xl bg-primary-foreground/10 px-4 py-5 text-center text-sm font-semibold text-primary-foreground">
          {expiredLabel}
        </p>
      ) : (
        <div
          role="timer"
          aria-label={`${countdownLabel}. ${deadlineLabel}`}
          className="grid grid-cols-4 gap-2"
        >
          {units.map((unit) => (
            <div
              key={unit.label}
              className="rounded-xl bg-primary-foreground/10 px-2 py-2.5 text-center"
            >
              <p className="font-mono text-lg font-bold tabular-nums text-primary-foreground sm:text-xl">
                {unit.value}
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground/60">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      )}
      <p className="sr-only">{deadlineLabel}</p>
    </div>
  );
}

function ServiceCard({
  service,
  ctaLabel,
  cardPromoLabel,
  messageUrl,
}: {
  service: ServiceCardData;
  ctaLabel: string;
  cardPromoLabel: string;
  messageUrl: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = serviceIcons[service.icon] ?? Globe2;

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.015 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="group relative flex h-full min-h-[22rem] flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
    >
      <div className="relative z-10 flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <motion.span
          whileHover={prefersReducedMotion ? undefined : { rotate: 5, scale: 1.08 }}
          transition={{
            rotate: { type: "spring", stiffness: 300, damping: 15 },
            scale: { type: "spring", stiffness: 300, damping: 15 },
          }}
          className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground"
        >
          <Icon className="size-5" aria-hidden="true" />
        </motion.span>
        <span className="rounded-full border border-cta/20 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cta">
          {cardPromoLabel}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-6 rounded-xl border border-border bg-muted/40 p-3">
        <p className="text-xs text-muted-foreground line-through">{service.normalPrice}</p>
        <p className="mt-0.5 text-2xl font-bold tracking-tight text-cta">{service.promoPrice}</p>
      </div>
      <motion.a
        href={messageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ctaLabel}: ${service.title}`}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold text-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        {ctaLabel}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </motion.a>
      </div>
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="layanan" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cta">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.services.subtitle}
            </p>
          </div>
          <motion.aside
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-primary/10 bg-primary p-4 text-primary-foreground shadow-[var(--shadow-feature)] sm:p-5 lg:max-w-[32rem]"
          >
            <motion.div
              aria-hidden="true"
              animate={prefersReducedMotion ? undefined : { x: ["-120%", "420%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-hero-accent/15 to-transparent blur-sm"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-hero-accent px-3 py-1.5 text-xs font-bold text-hero-accent-foreground">
                  <motion.span
                    aria-hidden="true"
                    animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="size-1.5 rounded-full bg-hero-accent-foreground"
                  />
                  {t.services.promoLabel}
                </span>
                <time dateTime={LAUNCH_PROMO_DEADLINE} className="text-xs font-semibold text-primary-foreground/70">
                  {t.services.launchPromoDeadline}
                </time>
              </div>
              <p className="mt-3 text-sm font-bold text-primary-foreground">{t.services.launchPromoTitle}</p>
              <p className="mt-1 text-xs leading-relaxed text-primary-foreground/65">
                {t.services.launchPromoDescription}
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary-foreground/55">
                    {t.services.countdownLabel}
                  </p>
                  <Countdown
                    countdownLabel={t.services.countdownLabel}
                    deadlineLabel={t.services.launchPromoDeadline}
                    expiredLabel={t.services.countdownExpired}
                    daysLabel={t.services.countdownDays}
                    hoursLabel={t.services.countdownHours}
                    minutesLabel={t.services.countdownMinutes}
                    secondsLabel={t.services.countdownSeconds}
                  />
                </div>
                <motion.a
                  href={waLink(t.wa.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-cta px-4 text-sm font-semibold text-cta-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer sm:w-auto"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {t.services.launchPromoCta}
                </motion.a>
              </div>
            </div>
          </motion.aside>
        </FadeIn>

        <StaggerGroup as="ul" className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.cards.map((service) => (
            <StaggerItem as="li" key={service.icon}>
              <ServiceCard
                service={service}
                ctaLabel={t.services.ctaLabel}
                cardPromoLabel={t.services.cardPromoLabel}
                messageUrl={waLink(t.wa.service(service.title))}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
