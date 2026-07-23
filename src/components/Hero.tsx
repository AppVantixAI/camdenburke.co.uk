"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { site } from "@/lib/content";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const videoY = useTransform(smooth, [0, 1], ["0%", "32%"]);
  const videoScale = useTransform(smooth, [0, 1], [1.08, 1.28]);
  const contentY = useTransform(smooth, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(smooth, [0, 0.55, 0.9], [1, 0.35, 0]);
  const titleTrack = useTransform(smooth, [0, 0.7], [0, 8]);
  const titleTracking = useTransform(titleTrack, (v) => `${v / 100}em`);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const play = async () => {
      try {
        await video.play();
        setReady(true);
      } catch {
        setReady(false);
      }
    };
    void play();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[115svh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: videoY, scale: videoScale }}
      >
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={site.videoPoster}
          aria-hidden
        >
          <source src={site.videoSrc} type="video/mp4" />
        </video>
        {!ready && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={site.videoPoster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </motion.div>

      <div className="video-veil absolute inset-0" aria-hidden />

      <motion.div
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-28"
        style={reduce ? undefined : { y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/80"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-7xl lg:text-8xl"
            style={reduce ? undefined : { letterSpacing: titleTracking }}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.headline}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.subhead}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={site.primaryCtaHref}
              className="inline-flex items-center justify-center bg-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-amber-deep"
            >
              {site.primaryCta}
            </a>
            <a
              href={site.secondaryCtaHref}
              className="inline-flex items-center justify-center border border-ink/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-ink"
            >
              {site.secondaryCta}
            </a>
          </motion.div>
          <motion.p
            className="mt-12 font-display text-xl font-medium text-ink md:text-2xl"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {site.name}
          </motion.p>
        </div>
      </motion.div>

      <motion.a
        href="#proof"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted transition hover:text-ink"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-ink/50 to-transparent" aria-hidden />
      </motion.a>
    </section>
  );
}
