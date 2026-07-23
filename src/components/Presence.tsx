"use client";

import Image from "next/image";
import { site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Presence() {
  if (!site.portraitSrc) return null;

  return (
    <section id="presence" className="scroll-mt-24 border-t border-line bg-void">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-12 md:gap-14 md:px-8 md:py-28">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden border border-line bg-panel">
            <Image
              src={site.portraitSrc}
              alt={site.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {site.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
            {site.name}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl">
            {site.creedLine}
          </p>
          <a
            href={site.primaryCtaHref}
            className="mt-10 inline-flex items-center justify-center bg-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-amber-deep"
          >
            {site.primaryCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
