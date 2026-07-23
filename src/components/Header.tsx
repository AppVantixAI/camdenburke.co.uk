"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-mist/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8">
        <a
          href="#top"
          onClick={close}
          className={`font-display text-sm font-bold tracking-tight transition ${
            scrolled || open ? "text-ink" : "text-on-dark"
          }`}
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[10px] uppercase tracking-[0.22em] transition ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-on-dark/70 hover:text-on-dark"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.primaryCtaHref}
            className={`hidden border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition sm:inline-flex ${
              scrolled || open
                ? "border-ink/25 text-ink hover:border-signal hover:text-signal"
                : "border-on-dark/45 text-on-dark hover:border-on-dark hover:bg-on-dark/5"
            }`}
          >
            {site.primaryCta}
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center border lg:hidden ${
              scrolled || open
                ? "border-ink/25 text-ink"
                : "border-on-dark/40 text-on-dark"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3.5 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-current transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-line bg-mist lg:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 md:px-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.primaryCtaHref}
                onClick={close}
                className="mt-2 inline-flex items-center justify-center bg-signal px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white"
              >
                {site.primaryCta}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
