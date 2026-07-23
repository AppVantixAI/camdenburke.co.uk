"use client";

import Link from "next/link";
import { notes } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Notes() {
  return (
    <section id="notes" className="scroll-mt-24 border-t border-line bg-void">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
                {notes.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
                {notes.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {notes.body}
              </p>
            </div>
            <Link
              href={notes.indexHref}
              className="inline-flex w-fit items-center border border-ink/45 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition hover:border-amber hover:text-amber"
            >
              {notes.indexCta}
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {notes.items.map((note, index) => (
            <Reveal key={note.slug} delay={index * 0.06}>
              <article className="grid gap-4 py-10 md:grid-cols-[140px_1fr] md:gap-12 md:py-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {note.date}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    <Link
                      href={`/notes/${note.slug}`}
                      className="transition hover:text-amber"
                    >
                      {note.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                    {note.excerpt}
                  </p>
                  <Link
                    href={`/notes/${note.slug}`}
                    className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition hover:text-ink"
                  >
                    Read note →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
