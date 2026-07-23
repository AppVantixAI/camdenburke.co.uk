import Image from "next/image";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 mist-layer mist-drift" aria-hidden />

      {/* Desktop-only product still — right rail, never covers brand copy */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src="/hero-formforge.jpg"
          alt=""
          fill
          priority
          sizes="46vw"
          className="object-cover object-left opacity-90"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-mist via-mist/70 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mist to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="max-w-xl md:max-w-2xl">
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {site.eyebrow}
          </p>
          <h1 className="animate-rise animate-rise-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="animate-rise animate-rise-delay-1 mt-5 max-w-xl font-display text-2xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-3xl md:text-[2.1rem]">
            {site.headline}
          </p>
          <p className="animate-rise animate-rise-delay-2 mt-5 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
            {site.subhead}
          </p>
          <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.primaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-base font-semibold text-snow shadow-[0_18px_40px_-18px_rgba(15,118,110,0.85)] transition hover:bg-signal-deep"
            >
              {site.primaryCta}
              <span className="arrow-nudge" aria-hidden>
                →
              </span>
            </a>
            <a
              href={site.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-snow/90 px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-snow"
            >
              {site.secondaryCta}
            </a>
          </div>
          <p className="animate-rise animate-rise-delay-3 mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            {site.credibility}
          </p>
        </div>
      </div>
    </section>
  );
}
