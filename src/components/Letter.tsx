"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { letter } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function LetterLine({ paragraph }: { paragraph: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const light = Boolean(reduce || isMobile);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    light ? [1, 1] : [0.25, 1],
  );
  const y = useTransform(scrollYProgress, [0, 1], light ? [0, 0] : [24, 0]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y }}
      className="text-base leading-relaxed text-ink/90 sm:text-lg md:text-2xl md:leading-relaxed"
    >
      {paragraph}
    </motion.p>
  );
}

export function Letter() {
  return (
    <section
      id="letter"
      className="scroll-mt-20 border-y border-line bg-panel md:scroll-mt-24"
    >
      <div className="page-pad section-pad mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {letter.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-5xl">
            {letter.title}
          </h2>
        </Reveal>

        <div className="mt-10 space-y-7 sm:mt-14 sm:space-y-9 md:mt-16 md:space-y-10">
          {letter.paragraphs.map((paragraph) => (
            <LetterLine key={paragraph.slice(0, 28)} paragraph={paragraph} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 font-display text-lg font-semibold text-ink sm:mt-14 sm:text-xl md:mt-16 md:text-2xl">
            {letter.signoff}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
