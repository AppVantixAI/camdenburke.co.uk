"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { work } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

function WorkItem({
  item,
  index,
}: {
  item: (typeof work.items)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -48]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduce ? [1, 1, 1, 1] : [0.94, 1, 1, 0.96],
  );

  return (
    <article
      ref={ref}
      className={`grid items-center gap-8 py-16 md:gap-12 lg:grid-cols-2 ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden border border-line bg-panel"
        style={{ scale }}
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
      </motion.div>

      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
          {item.role}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          {item.name}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {item.body}
        </p>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-amber transition hover:text-amber-deep"
        >
          {item.cta} →
        </a>
      </Reveal>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {work.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {work.title}
          </h2>
        </Reveal>

        <div className="mt-4 divide-y divide-line">
          {work.items.map((item, index) => (
            <WorkItem key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
