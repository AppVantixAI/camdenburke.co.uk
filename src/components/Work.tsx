import Image from "next/image";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line/60 bg-snow"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {work.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {work.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {work.items.map((item) => (
            <article key={item.name} className="border-t border-line pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
                {item.kind}
              </p>
              <div className="mt-3 flex items-center gap-3">
                {item.mark && (
                  <Image
                    src="/appvantix-mark.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                )}
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {item.name}
                </h3>
              </div>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-signal-deep"
              >
                {item.cta}
                <span className="arrow-nudge" aria-hidden>
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
