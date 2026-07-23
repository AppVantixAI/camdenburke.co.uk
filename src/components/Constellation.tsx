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
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduce ? [1, 1, 1, 1] : [0.96, 1, 1, 0.98],
  );

  return (
    <article
      ref={ref}
      className="relative min-h-[70vh] overflow-hidden border-t border-line"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {item.role}
          </p>
          <h3 className="mt-3 font-display text-5xl font-semibold uppercase tracking-tight text-ink md:text-7xl">
            {item.name}
          </h3>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {item.body}
          </p>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center border border-ink/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink transition hover:border-amber hover:text-amber"
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
    <section id="constellation" className="scroll-mt-24 bg-void">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {constellation.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
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
