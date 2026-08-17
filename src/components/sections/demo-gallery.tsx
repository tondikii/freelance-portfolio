"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "@/lib/i18n";

type GalleryImage = {
  src: string;
  alt: string;
};

type DemoGalleryProps = {
  images: readonly GalleryImage[];
  title: string;
};

export function DemoGallery({ images, title }: DemoGalleryProps) {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => setDocumentVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !playing || hovered || focused || !inView || !documentVisible || images.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [documentVisible, focused, hovered, images.length, inView, playing, prefersReducedMotion]);

  const activeImage = images[activeIndex] ?? images[0];
  const rotating = playing && !prefersReducedMotion;

  const moveSlide = (direction: number) => {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  };

  return (
    <div
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={title}
      className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="relative aspect-[16/10]">
        <motion.div
          key={activeImage.src}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0"
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-primary/35 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white backdrop-blur">
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-primary/75 to-transparent px-3 pb-2 pt-12">
        <button
          type="button"
          aria-label={t.demos.previousLabel}
          onClick={() => moveSlide(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-primary/30 text-white backdrop-blur transition-colors hover:bg-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-0.5" aria-label={t.demos.galleryLabel(title)}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={t.demos.galleryImageLabel(index + 1, images.length)}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className="flex size-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              <span
                className={`block rounded-full transition-all duration-200 ${
                  index === activeIndex ? "size-2 bg-white" : "size-1.5 bg-white/55 hover:bg-white/90"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={rotating ? t.demos.pauseLabel : t.demos.playLabel}
            aria-pressed={rotating}
            onClick={() => setPlaying((value) => !value)}
            className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-primary/30 text-white backdrop-blur transition-colors hover:bg-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          >
            {rotating ? <Pause className="size-3.5" aria-hidden="true" /> : <Play className="size-3.5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            aria-label={t.demos.nextLabel}
            onClick={() => moveSlide(1)}
            className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-primary/30 text-white backdrop-blur transition-colors hover:bg-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
