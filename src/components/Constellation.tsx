"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
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
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  const imageScale = useTransform(
    smooth,
    [0, 0.5, 1],
    reduce ? [1, 1, 1] : [1.18, 1.05, 1.22],
  );
  const imageY = useTransform(
    smooth,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-4%", "6%"],
  );
  const textOpacity = useTransform(
    smooth,
    [0, 0.18, 0.55, 0.82, 1],
    reduce ? [1, 1, 1, 1, 1] : [0, 1, 1, 0.25, 0],
  );
  const textY = useTransform(
    smooth,
    [0, 0.2, 0.8, 1],
    reduce ? [0, 0, 0, 0] : [48, 0, -12, -40],
  );
  const veil = useTransform(
    smooth,
    [0, 0.35, 0.7, 1],
    reduce ? [0.55, 0.55, 0.55, 0.55] : [0.75, 0.45, 0.5, 0.8],
  );

  return (
    <div
      ref={trackRef}
      className="relative h-[220vh]"
      style={{ zIndex: index + 1 }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale, y: imageY }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-void"
          style={{ opacity: veil }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-void via-void/50 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40"
          aria-hidden
        />

        <motion.div
          className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28"
          style={{ opacity: textOpacity, y: textY }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber">
            {String(index + 1).padStart(2, "0")} · {item.role}
          </p>
          <h3 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight text-ink md:text-8xl">
            {item.name}
          </h3>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-xl">
            {item.body}
          </p>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center border border-ink/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-ink transition hover:border-amber hover:text-amber"
          >
            {item.cta}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export function Constellation() {
  return (
    <section id="constellation" className="scroll-mt-24 bg-void">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {constellation.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-6xl">
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
