"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { offer, site } from "@/lib/content";

export function Offer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduce ? [1, 1, 1] : [0, 0.5, 1],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [0.94, 1],
  );

  return (
    <section
      id="offer"
      ref={ref}
      className="scroll-mt-24 overflow-hidden border-t border-line bg-panel"
    >
      <motion.div
        className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36"
        style={{ y, opacity, scale }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
          {offer.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-7xl md:leading-[1.02]">
          {offer.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {offer.body}
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={offer.primaryCtaHref}
            className="inline-flex items-center justify-center bg-amber px-8 py-4 text-base font-bold uppercase tracking-wide text-void transition hover:bg-amber-deep"
          >
            {offer.primaryCta}
          </a>
          <a
            href={offer.secondaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-ink transition hover:border-ink/60"
          >
            {offer.secondaryCta}
          </a>
          <a
            href={offer.tertiaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-ink transition hover:border-ink/60"
          >
            {offer.tertiaryCta}
          </a>
        </div>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.location}
        </p>
      </motion.div>
    </section>
  );
}
