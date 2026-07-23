"use client";

import { offer, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Offer() {
  return (
    <section
      id="offer"
      className="scroll-mt-24 border-t border-line bg-panel"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {offer.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            {offer.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {offer.body}
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href={offer.primaryCtaHref}
            className="inline-flex items-center justify-center bg-amber px-8 py-4 text-base font-bold uppercase tracking-wide text-void transition hover:bg-amber-deep"
          >
            {offer.primaryCta}
          </a>
          <a
            href={offer.secondaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-ink transition hover:border-ink/60"
          >
            {offer.secondaryCta}
          </a>
          <a
            href={offer.tertiaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-ink transition hover:border-ink/60"
          >
            {offer.tertiaryCta}
          </a>
        </Reveal>

        <p className="mt-14 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.location}
        </p>
      </div>
    </section>
  );
}
