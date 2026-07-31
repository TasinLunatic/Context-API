export default function Toggle({ label, description, enabled, onToggle }) {
  return (
    <div className="glass-card flex items-center justify-between gap-4 rounded-2xl p-4">
      <div className="min-w-0">
        <p className="font-semibold text-ink">{label}</p>
        {description && (
          <p className="mt-1 text-sm text-ink-muted">{description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={onToggle}
        className="toggle-track"
        data-on={enabled}
        aria-pressed={enabled}
        aria-label={label}
      >
        <span className="toggle-thumb" />
      </button>
    </div>
  );
}
