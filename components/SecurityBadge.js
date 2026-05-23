import { resume } from '../data/resume';

const statusTone = {
  secure: 'text-matrix',
  warn: 'text-amber',
};

export default function SecurityBadge() {
  return (
    <aside className="security-badge panel-border relative overflow-hidden bg-panel/90 p-0 backdrop-blur-sm">
      <div className="badge-shine pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative border-b border-matrix/20 bg-gradient-to-r from-matrix/10 to-transparent px-5 py-3">
        <p className="font-mono text-[9px] tracking-[0.4em] text-matrix-dim">U.S. SOC OPERATOR ID</p>
        <p className="font-mono text-lg font-bold text-white tracking-wider">{resume.clearanceId}</p>
      </div>

      <div className="relative flex gap-4 p-5">
        <div className="relative h-24 w-20 shrink-0 border border-matrix/30 bg-void">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-matrix/20 to-void">
            <span className="font-display text-2xl font-bold text-matrix">CB</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-matrix animate-pulse-glow" />
        </div>

        <div className="min-w-0 flex-1 font-mono text-[10px]">
          <p className="text-white font-semibold text-sm truncate">{resume.name}</p>
          <p className="text-matrix-dim mt-0.5 leading-relaxed">{resume.headline.split('|')[0].trim()}</p>
          <p className="mt-2 text-[#6a8070]">{resume.location}</p>
          <p className="mt-1 text-matrix-dim truncate">{resume.email}</p>
        </div>
      </div>

      <div className="px-5 pb-4 space-y-2">
        {resume.heroStatus.map((item) => (
          <div key={item.label} className="flex justify-between border border-matrix/10 px-2 py-1.5">
            <span className="text-[#6a8070]">{item.label}</span>
            <span className={`font-semibold ${statusTone[item.tone]}`}>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="barcode-strip h-8 border-t border-matrix/15" aria-hidden="true" />
    </aside>
  );
}
