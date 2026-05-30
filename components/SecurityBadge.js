import { resume } from '../data/resume';

const statusTone = {
  secure: 'text-matrix',
  warn: 'text-amber',
};

export default function SecurityBadge() {
  return (
    <aside className="security-badge panel-border relative overflow-hidden bg-panel/90 backdrop-blur-sm">
      <div className="badge-shine pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative border-b border-matrix/20 px-5 py-5">
        <p className="font-mono text-[10px] tracking-wide text-matrix-dim">
          Recruiter snapshot
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-[#c7ddca]">{resume.targetRoles}</p>
      </div>

      <div className="relative space-y-0 px-5 py-1">
        {resume.heroStatus.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between gap-4 border-b border-matrix/10 py-3 last:border-0"
          >
            <span className="shrink-0 font-mono text-[11px] text-[#6a8070]">{item.label}</span>
            <span
              className={`min-w-0 text-right font-mono text-[11px] font-medium leading-snug break-words ${statusTone[item.tone]}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="relative border-t border-matrix/15 px-5 py-4">
        <p className="font-mono text-[10px] tracking-wide text-matrix-dim">
          Work authorization
        </p>
        <p className="mt-2 font-body text-sm leading-relaxed text-[#9cb8a0]">
          {resume.workAuthorization}
        </p>
      </div>

      <div className="relative border-t border-matrix/15 px-5 pb-5 pt-4">
        <p className="font-mono text-[10px] tracking-wide text-matrix-dim">Top skills</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {resume.scanSkills.map((skill) => (
            <span key={skill} className="meta-chip shrink-0 whitespace-nowrap">
              <span className="meta-chip__value">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
