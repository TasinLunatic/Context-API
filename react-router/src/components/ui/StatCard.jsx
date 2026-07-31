import useCountUp from "../../hooks/useCountUp";

const accentColors = {
  cyan: "text-cyan-500 bg-cyan-500/10",
  violet: "text-violet-500 bg-violet-500/10",
  blue: "text-blue-500 bg-blue-500/10",
  emerald: "text-emerald-500 bg-emerald-500/10",
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  accent = "cyan",
  suffix = "",
  decimals = 0,
}) {
  const [ref, display] = useCountUp(value, { decimals });
  const colors = accentColors[accent] || accentColors.cyan;

  return (
    <div className="glass-card card-lift rounded-2xl p-5">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${colors}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p ref={ref} className="font-display text-2xl font-bold text-ink">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-ink-muted">{label}</p>
    </div>
  );
}
