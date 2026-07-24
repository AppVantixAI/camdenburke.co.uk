"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/** Persistent primary CTA for phones — appears after the hero. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-mist/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <a
        href={site.primaryCtaHref}
        className="tap-target flex w-full items-center justify-center bg-signal px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white"
        tabIndex={visible ? 0 : -1}
      >
        {site.primaryCta}
      </a>
    </div>
  );
}
