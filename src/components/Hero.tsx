"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { site } from "@/lib/content";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const parallaxOff = Boolean(reduce || isMobile);

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
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={
          parallaxOff ? undefined : { y: videoY, scale: videoScale }
        }
      >
        <video
          ref={videoRef}
          className={`h-full w-full object-cover object-[center_30%] transition-opacity duration-1000 md:object-center ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload={isMobile ? "metadata" : "auto"}
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
            className="absolute inset-0 h-full w-full object-cover object-[center_30%] md:object-center"
          />
        )}
      </motion.div>

      <div className="video-veil absolute inset-0" aria-hidden />

      <motion.div
        className="page-pad relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end pb-20 pt-[calc(var(--header-h)+1.25rem)] md:pb-28 md:pt-28"
        style={parallaxOff ? undefined : { y: contentY, opacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal sm:text-[11px] sm:tracking-[0.32em]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-[2.75rem] font-bold leading-[0.94] tracking-tight text-on-dark sm:mt-5 sm:text-6xl md:text-7xl lg:text-[5.85rem]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl font-display text-lg font-medium leading-snug tracking-tight text-on-dark sm:mt-6 sm:text-xl md:text-2xl lg:text-[1.7rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.headline}
          </motion.p>
          <motion.p
            className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-on-dark-muted sm:mt-5 sm:text-base md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            {site.subhead}
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:max-w-md sm:flex-row sm:items-stretch"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={site.primaryCtaHref}
              className="btn-solid tap-target inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] sm:flex-1"
            >
              {site.primaryCta}
            </a>
            <a
              href={site.secondaryCtaHref}
              className="btn-ghost-on-media tap-target inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] sm:flex-1"
            >
              {site.secondaryCta}
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#paths"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-on-dark-muted transition hover:text-on-dark sm:flex"
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
