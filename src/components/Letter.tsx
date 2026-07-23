"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { letter } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function LetterLine({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [0.25, 1],
  );
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y }}
      className="text-lg leading-relaxed text-ink/90 md:text-2xl md:leading-relaxed"
    >
      <span className="sr-only">{`Paragraph ${index + 1}. `}</span>
      {paragraph}
    </motion.p>
  );
}

export function Letter() {
  return (
    <section
      id="letter"
      className="scroll-mt-24 border-y border-line bg-panel/70"
    >
      <div className="mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {letter.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {letter.title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-10">
          {letter.paragraphs.map((paragraph, index) => (
            <LetterLine
              key={paragraph.slice(0, 28)}
              paragraph={paragraph}
              index={index}
            />
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-16 font-display text-xl font-semibold text-ink md:text-2xl">
            {letter.signoff}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={letter.ctaHref}
              className="inline-flex items-center justify-center bg-signal px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-signal-deep"
            >
              {letter.cta}
            </a>
            <a
              href={letter.secondaryCtaHref}
              className="inline-flex items-center justify-center border border-ink/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-signal hover:text-signal"
            >
              {letter.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
