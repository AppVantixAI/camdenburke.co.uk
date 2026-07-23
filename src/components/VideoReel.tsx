"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { reel, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function VideoReel() {
  const trackRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001,
  });

  const scale = useTransform(
    smooth,
    [0, 0.35, 0.55, 1],
    reduce ? [1, 1, 1, 1] : [0.72, 1, 1, 0.88],
  );
  const radius = useTransform(
    smooth,
    [0, 0.35, 0.55, 1],
    reduce ? [0, 0, 0, 0] : [28, 4, 4, 16],
  );
  const opacity = useTransform(
    smooth,
    [0, 0.2, 0.75, 1],
    reduce ? [1, 1, 1, 1] : [0.4, 1, 1, 0.55],
  );

  return (
    <section
      id="reel"
      ref={trackRef}
      className="scroll-mt-24 bg-void py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {reel.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-6xl">
            {reel.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted md:text-lg">{reel.body}</p>
        </Reveal>

        <motion.div
          className="relative mt-12 aspect-video overflow-hidden border border-line bg-panel will-change-transform"
          style={{ scale, borderRadius: radius, opacity }}
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
