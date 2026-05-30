const toneClass = {
  secure: 'meta-chip meta-chip--secure',
  warn: 'meta-chip meta-chip--warn',
  neutral: 'meta-chip',
};

export default function MetaChip({ label, value, tone = 'neutral' }) {
  return (
    <span className={`${toneClass[tone] || toneClass.neutral} shrink-0`}>
      {label && <span className="meta-chip__label">{label}</span>}
      <span className="meta-chip__value whitespace-nowrap">{value}</span>
    </span>
  );
}
