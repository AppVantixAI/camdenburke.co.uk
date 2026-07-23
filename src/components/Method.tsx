import { method } from "@/lib/content";

export function Method() {
  return (
    <section id="method" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {method.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {method.title}
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {method.items.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-6">
              <p className="font-mono text-xs text-signal">
                {String(index + 1).padStart(2, "0")} · {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
