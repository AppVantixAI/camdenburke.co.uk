import { BrandMark } from "@/components/BrandMark";
import { footerLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-mist">
      <div className="page-pad mx-auto flex max-w-6xl flex-col gap-6 py-8 sm:py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-display text-sm font-bold text-ink">{site.name}</p>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
            <BrandMark withLabel size={20} className="text-ink" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            © {year} · {site.legal}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:flex sm:flex-wrap sm:gap-5">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="tap-target-inline transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
