"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const menuButton = menuButtonRef.current;
    const panelFocusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        )
      : [];
    const focusables = menuButton
      ? [menuButton, ...panelFocusables]
      : panelFocusables;

    (focusables[1] ?? focusables[0])?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && active === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      menuButton?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-snow/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-sm font-semibold text-snow transition hover:bg-signal-deep"
          >
            Demo
            <span className="arrow-nudge" aria-hidden>
              →
            </span>
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-[44px] items-center rounded-full border border-ink/15 bg-snow/80 px-4 text-sm font-semibold text-ink md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id={panelId}
          ref={panelRef}
          className="border-t border-line bg-snow px-5 py-4 md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.primaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-signal px-4 py-3 text-base font-semibold text-snow"
              onClick={() => setOpen(false)}
            >
              See the FormForge demo →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
