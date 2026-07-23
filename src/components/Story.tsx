"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { story } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <section
      id="story"
      ref={ref}
      className="scroll-mt-24 border-t border-line bg-panel"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {story.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-[1.1]">
            {story.title}
          </h2>
        </Reveal>

        <motion.div style={{ x }} className="mt-6 h-px w-24 bg-amber" aria-hidden />

        <div className="mt-16 grid gap-10 md:gap-14">
          {story.beats.map((beat, index) => (
            <Reveal key={beat.title} delay={index * 0.08}>
              <article className="grid gap-4 border-t border-line pt-8 md:grid-cols-[140px_1fr] md:gap-10">
                <p className="font-mono text-xs text-amber">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    {beat.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                    {beat.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
