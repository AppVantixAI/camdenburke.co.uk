"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-void/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          {site.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.primaryCtaHref}
          className="bg-amber px-4 py-2 text-sm font-bold text-void transition hover:bg-amber-deep"
        >
          {site.primaryCta}
        </a>
      </div>
    </motion.header>
  );
}
