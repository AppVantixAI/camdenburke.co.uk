"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { paths, site } from "@/lib/content";

export function Offer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const lightMotion = Boolean(reduce || isMobile);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], lightMotion ? [0, 0] : [48, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    lightMotion ? [1, 1, 1] : [0, 0.7, 1],
  );

  return (
    <section id="paths" ref={ref} className="scroll-mt-20 overflow-hidden md:scroll-mt-24">
      <motion.div
        className="page-pad section-pad mx-auto max-w-6xl"
        style={{ y, opacity }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
          {paths.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-[2rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-4xl md:text-6xl md:leading-[1.02]">
          {paths.title}
        </h2>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          {paths.body}
        </p>

        <div className="mt-10 divide-y divide-line border-y border-line md:mt-14 md:grid md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0 md:border-0 md:divide-line">
          {paths.items.map((item, index) => (
            <motion.article
              key={item.label}
              className={`flex flex-col py-8 md:px-8 md:py-0 ${
                index === 0 ? "md:pl-0" : ""
              } ${index === paths.items.length - 1 ? "md:pr-0" : ""}`}
              initial={reduce ? false : { opacity: 0, y: isMobile ? 16 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: isMobile ? 0.5 : 0.7,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                {item.label}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:mt-4 sm:text-2xl md:text-[1.65rem]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:mt-4 md:text-base">
                {item.detail}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8">
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className={
                    item.primary
                      ? "tap-target inline-flex w-full items-center justify-center bg-signal px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-signal-deep md:w-auto"
                      : "tap-target inline-flex w-full items-center justify-center border border-ink/20 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-signal hover:text-signal md:w-auto"
                  }
                >
                  {item.cta}
                </a>
                {item.secondaryCta && item.secondaryHref ? (
                  <a
                    href={item.secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                    className="tap-target inline-flex items-center justify-center px-2 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition hover:text-ink"
                  >
                    {item.secondaryCta}
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:mt-14 sm:text-xs">
          {site.location}
        </p>
      </motion.div>
    </section>
  );
}
