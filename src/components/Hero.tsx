import Image from "next/image";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 mist-layer mist-drift" aria-hidden />
      <Image
        src="/hero-formforge.jpg"
        alt="FormForge configurator — product context for AppVantix"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[78%_center] opacity-50 md:object-[84%_center] md:opacity-85"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-mist via-mist/90 to-mist/70 md:bg-gradient-to-r md:from-mist md:via-mist/95 md:via-[42%] md:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mist to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
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
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-snow/90 px-6 py-3.5 text-base font-semibold text-ink backdrop-blur-sm transition hover:border-ink/30 hover:bg-snow"
            >
              {site.secondaryCta}
            </a>
          </div>
          <ul className="animate-rise animate-rise-delay-3 mt-8 flex flex-wrap gap-2">
            {site.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-snow/85 px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink-soft backdrop-blur-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
