import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-panel/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-sm font-bold text-ink">{site.name}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            © {year} · {site.legal}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <a href={site.emailHref} className="transition hover:text-signal">
            {site.email}
          </a>
          <a
            href={site.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal"
          >
            AppVantix
          </a>
          <a
            href={site.formforgeUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal"
          >
            FormForge
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
