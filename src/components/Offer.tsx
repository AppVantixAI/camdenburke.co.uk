"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { paths, site } from "@/lib/content";

export function Offer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduce ? [1, 1, 1] : [0, 0.7, 1],
  );

  return (
    <section id="paths" ref={ref} className="scroll-mt-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32"
        style={{ y, opacity }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
          {paths.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink md:text-6xl md:leading-[1.02]">
          {paths.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {paths.body}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {paths.items.map((item, index) => (
            <motion.article
              key={item.label}
              className={`flex flex-col md:px-8 ${index === 0 ? "md:pl-0" : ""} ${
                index === paths.items.length - 1 ? "md:pr-0" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                {item.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {item.detail}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className={
                    item.primary
                      ? "inline-flex items-center justify-center bg-signal px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-signal-deep"
                      : "inline-flex items-center justify-center border border-ink/20 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-signal hover:text-signal"
                  }
                >
                  {item.cta}
                </a>
                {item.secondaryCta && item.secondaryHref ? (
                  <a
                    href={item.secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-2 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition hover:text-ink"
                  >
                    {item.secondaryCta}
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-14 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.location}
        </p>
      </motion.div>
    </section>
  );
}
