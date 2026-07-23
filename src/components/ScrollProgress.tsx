"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="progress-bar fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-amber shadow-[0_0_18px_rgba(240,160,90,0.45)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
