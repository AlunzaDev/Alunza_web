export function PillarContent({ label, description, Icon }) {
  return (
    <button
      type="button"
      className="pillar-trigger group flex flex-col items-center gap-1.5"
      aria-label={`${label}: ${description}`}
    >
      <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
      <span>{label}</span>
      <span className="pillar-detail" role="tooltip">
        {description}
      </span>
    </button>
  )
}
