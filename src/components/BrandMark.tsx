import { assets, site } from "@/lib/content";

type BrandMarkProps = {
  className?: string;
  size?: number;
  withLabel?: boolean;
  href?: string;
};

/** AppVantix Industrial Clarity mark — company signal next to the personal brand. */
export function BrandMark({
  className = "",
  size = 22,
  withLabel = false,
  href = site.companyUrl,
}: BrandMarkProps) {
  const inner = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.mark}
        alt=""
        width={size}
        height={size}
        className="shrink-0"
      />
      {withLabel ? (
        <span className="font-display text-sm font-semibold tracking-tight">
          {site.company}
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>{inner}</span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 transition hover:opacity-80 ${className}`}
      aria-label={`${site.company} — company site`}
    >
      {inner}
    </a>
  );
}
