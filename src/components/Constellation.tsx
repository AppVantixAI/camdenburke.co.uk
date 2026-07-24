"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { constellation } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function ConstellationPanel({
  item,
  index,
}: {
  item: (typeof constellation.items)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const light = Boolean(reduce || isMobile);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    light ? ["0%", "0%"] : ["-6%", "6%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    light ? [1, 1, 1] : [1.08, 1.02, 1.08],
  );

  return (
    <article
      ref={ref}
      className="relative min-h-[72svh] overflow-hidden border-t border-white/10 md:min-h-[88svh]"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority={index === 0}
        />
      </motion.div>

      <div className="absolute inset-0 bg-void/60 md:bg-void/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/35 md:bg-gradient-to-r md:from-void md:via-void/55 md:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-transparent md:from-void/80 md:to-void/30"
        aria-hidden
      />

      <div className="page-pad relative mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-end pb-14 pt-24 md:min-h-[88svh] md:pb-24 md:pt-28">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal sm:text-xs sm:tracking-[0.32em]">
            {String(index + 1).padStart(2, "0")} · {item.role}
          </p>
          <h3 className="mt-3 font-display text-4xl font-bold tracking-tight text-on-dark sm:mt-4 sm:text-5xl md:text-7xl">
            {item.name}
          </h3>
          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-on-dark-muted sm:mt-6 sm:text-base md:text-xl">
            {item.body}
          </p>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-on-media tap-target mt-8 inline-flex w-full items-center justify-center px-6 py-3.5 font-mono text-xs uppercase tracking-[0.22em] sm:mt-10 sm:w-fit sm:px-7"
          >
            {item.cta}
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export function Constellation() {
  return (
    <section id="constellation" className="scroll-mt-20 bg-mist md:scroll-mt-24">
      <div className="page-pad section-pad mx-auto max-w-6xl !pb-10 md:!pb-16">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {constellation.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-6xl">
            {constellation.title}
          </h2>
        </Reveal>
      </div>

      <div>
        {constellation.items.map((item, index) => (
          <ConstellationPanel key={item.name} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
