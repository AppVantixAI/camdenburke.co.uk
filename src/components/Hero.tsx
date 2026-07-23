import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="paper-grain absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-16 top-24 hidden select-none font-display text-[clamp(8rem,22vw,18rem)] font-medium leading-none text-ink/[0.04] md:block"
        aria-hidden
      >
        CB
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-36">
        <div className="max-w-3xl">
          <div className="animate-rise rule-gold mark-draw" aria-hidden />
          <p className="animate-rise mt-6 font-mono text-xs uppercase tracking-[0.22em] text-cobalt">
            {site.eyebrow}
          </p>
          <h1 className="animate-rise animate-rise-delay-1 mt-5 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-ink">
            {site.name}
          </h1>
          <p className="animate-rise animate-rise-delay-1 mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl lg:text-[2.15rem]">
            {site.headline}
          </p>
          <p className="animate-rise animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {site.subhead}
          </p>
          <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.primaryCtaHref}
              className="group inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 text-base font-semibold text-white transition hover:bg-cobalt"
            >
              {site.primaryCta}
              <span className="link-arrow" aria-hidden>
                →
              </span>
            </a>
            <a
              href={site.secondaryCtaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-ink/20 bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/40"
            >
              {site.secondaryCta}
            </a>
          </div>
          <p className="animate-rise animate-rise-delay-3 mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            {site.role} · {site.company} · {site.location.split("·")[0].trim()}
          </p>
        </div>
      </div>
    </section>
  );
}
