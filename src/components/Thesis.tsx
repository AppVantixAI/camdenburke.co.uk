import { thesis } from "@/lib/content";

export function Thesis() {
  return (
    <section id="thesis" className="scroll-mt-24 border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cobalt">
              {thesis.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {thesis.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              {thesis.body}
            </p>
          </div>

          <ol className="space-y-0">
            {thesis.beliefs.map((item) => (
              <li
                key={item.num}
                className="border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <p className="font-mono text-xs text-gold">{item.num}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
