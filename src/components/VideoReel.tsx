"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function VideoReel() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    reduce ? [1, 1, 1, 1] : [0.88, 1, 1, 0.92],
  );
  const radius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    reduce ? [0, 0, 0, 0] : [28, 8, 8, 20],
  );

  return (
    <section id="reel" ref={ref} className="scroll-mt-24 bg-void py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            Product reel
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Motion over mockups.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            A loop cut from real FormForge surfaces — the work behind the
            companies I lead.
          </p>
        </Reveal>

        <motion.div
          className="relative mt-10 aspect-video overflow-hidden border border-line bg-panel"
          style={{ scale, borderRadius: radius }}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={site.videoPoster}
            controls
          >
            <source src={site.videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
