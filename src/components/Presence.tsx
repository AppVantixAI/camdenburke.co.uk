"use client";

import Image from "next/image";
import { presence, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Presence() {
  const hasPortrait = Boolean(site.portraitSrc);

  return (
    <section id="presence" className="scroll-mt-24 border-t border-line bg-void">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-panel">
            {hasPortrait ? (
              <Image
                src={site.portraitSrc}
                alt={site.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber">
                  {site.role}
                </p>
                <div>
                  <p
                    className="font-display text-[clamp(5rem,18vw,9rem)] font-semibold leading-none tracking-tight text-ink/15"
                    aria-hidden
                  >
                    {site.initials}
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
                    {site.name}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {site.company}
                  </p>
                </div>
                <p className="max-w-[16rem] text-sm leading-relaxed text-muted">
                  {site.creedLine}
                </p>
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center md:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
              {presence.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-5xl md:leading-[1.05]">
              {presence.title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/90 md:text-xl md:leading-relaxed">
              {presence.body}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {presence.signoff}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.primaryCtaHref}
                className="inline-flex items-center justify-center bg-amber px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-amber-deep"
              >
                {site.primaryCta}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-ink/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-ink"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
