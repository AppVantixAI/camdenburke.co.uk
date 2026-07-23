"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-6%", "6%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : [1.08, 1.02, 1.08],
  );

  return (
    <article
      ref={ref}
      className="relative min-h-[88svh] overflow-hidden border-t border-white/10"
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

      <div
        className="absolute inset-0 bg-void/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-void via-void/55 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/30"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal-bright">
            {String(index + 1).padStart(2, "0")} · {item.role}
          </p>
          <h3 className="mt-4 font-display text-5xl font-bold tracking-tight text-on-dark md:text-7xl">
            {item.name}
          </h3>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-on-dark-muted md:text-xl">
            {item.body}
          </p>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center border border-on-dark/45 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-on-dark transition hover:border-signal-bright hover:text-signal-bright"
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
    <section id="constellation" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {constellation.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-6xl">
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
