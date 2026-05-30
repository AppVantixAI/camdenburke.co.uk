import { resume } from '../data/resume';

export default function LabHighlight() {
  const lab = resume.featuredLab;
  if (!lab) return null;

  return (
    <article className="panel-border corner-brackets max-w-2xl bg-panel/85 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-matrix md:text-[10px]">Home lab</p>
      <h3 className="mt-3 font-display text-2xl font-bold text-white">{lab.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#9cb8a0]">{lab.summary}</p>

      <div className="mt-5">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-matrix-dim md:text-[10px]">Tools</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {lab.tools.map((tool) => (
            <span
              key={tool}
              className="border border-matrix/20 bg-matrix/5 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-[#9ec9a5] md:text-[10px]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {lab.links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            download={link.download || undefined}
            className="inline-flex min-h-[44px] items-center border border-[#3a4a3c] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] transition-all hover:border-matrix/50 hover:text-matrix active:scale-95"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
