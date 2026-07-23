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

  const videoY = useTransform(smooth, [0, 1], ["0%", "28%"]);
  const videoScale = useTransform(smooth, [0, 1], [1.06, 1.22]);
  const contentY = useTransform(smooth, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(smooth, [0, 0.55, 0.9], [1, 0.4, 0]);

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
      className="relative isolate min-h-[108svh] overflow-hidden"
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
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 md:px-8 md:pb-32"
        style={reduce ? undefined : { y: contentY, opacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-on-dark/75"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight text-on-dark sm:text-6xl md:text-7xl lg:text-[5.75rem]"
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl font-display text-xl font-semibold leading-snug tracking-tight text-on-dark sm:text-2xl md:text-[1.75rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.headline}
          </motion.p>
          <motion.p
            className="mt-5 max-w-lg text-base leading-relaxed text-on-dark-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.subhead}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={site.primaryCtaHref}
              className="inline-flex items-center justify-center bg-signal px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-signal-deep"
            >
              {site.primaryCta}
            </a>
            <a
              href={site.secondaryCtaHref}
              className="inline-flex items-center justify-center border border-on-dark/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-on-dark transition hover:border-on-dark hover:bg-on-dark/5"
            >
              {site.secondaryCta}
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#paths"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-on-dark-muted transition hover:text-on-dark"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <span
          className="h-8 w-px bg-gradient-to-b from-on-dark/45 to-transparent"
          aria-hidden
        />
      </motion.a>
    </section>
  );
}
