"use client";

import { record } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Record() {
  return (
    <section
      id="record"
      className="scroll-mt-24 border-y border-line bg-panel"
      aria-label="On the record"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {record.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-4xl">
            {record.title}
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {record.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <li>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 py-6 transition md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-7"
                >
                  <span className="font-display text-xl font-semibold text-ink transition group-hover:text-amber md:text-2xl">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-4 md:max-w-md md:text-right">
                    <span className="text-sm text-muted md:text-base">
                      {item.meta}
                    </span>
                    <span
                      className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-amber opacity-0 transition group-hover:opacity-100 sm:inline"
                      aria-hidden
                    >
                      Open →
                    </span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
