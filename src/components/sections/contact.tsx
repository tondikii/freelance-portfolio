"use client";

import { Clock, Globe, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/site";
import { waDisplayNumber, waLink } from "@/lib/wa";
import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/motion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function Contact() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();


  const infoItems = [
    { icon: WhatsAppIcon, label: t.contact.infoLabels.whatsapp, value: waDisplayNumber },
    { icon: Mail, label: t.contact.infoLabels.email, value: siteConfig.email },
    { icon: MapPin, label: t.contact.infoLabels.location, value: t.site.location },
    { icon: Globe, label: t.contact.infoLabels.area, value: t.site.serviceArea },
    { icon: Clock, label: t.contact.infoLabels.response, value: t.site.responseTime },
  ] as const;

  return (
    <section id="kontak" className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-primary-foreground/80">
              {t.contact.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={waLink(t.wa.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.015 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cta px-6 text-sm font-semibold text-cta-foreground transition-all duration-200 hover:-translate-y-px hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
              >
                <WhatsAppIcon className="size-4" aria-hidden="true" />
                {t.contact.ctaWa}
              </motion.a>
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${siteConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-[1.5px] border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
              >
                <Mail className="size-4" aria-hidden="true" />
                {t.contact.ctaEmail}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <item.icon className="size-4 text-primary-foreground/80" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-primary-foreground">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
