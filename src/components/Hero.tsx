"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

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
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 scale-110"
        style={reduce ? undefined : { y: videoY }}
      >
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
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
        className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-28"
        style={reduce ? undefined : { y: contentY, opacity }}
      >
        <div className="max-w-2xl">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.22em] text-amber"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            {site.headline}
          </motion.p>
          <motion.p
            className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            {site.subhead}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <a
              href={site.primaryCtaHref}
              className="inline-flex items-center justify-center bg-amber px-7 py-3.5 text-base font-bold text-void transition hover:bg-amber-deep"
            >
              {site.primaryCta}
            </a>
            <a
              href={site.secondaryCtaHref}
              className="inline-flex items-center justify-center border border-ink/25 bg-void/40 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur-sm transition hover:border-ink/50"
            >
              {site.secondaryCta}
            </a>
          </motion.div>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {site.role} · {site.company} · {site.location}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-amber/80">
            Studied · Musk · Bezos · Hormozi
          </p>
        </div>
      </motion.div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted transition hover:text-ink"
      >
        Scroll
      </a>
    </section>
  );
}
