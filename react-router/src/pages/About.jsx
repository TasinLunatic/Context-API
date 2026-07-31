import useTheme from "../hooks/useTheme";
import GlassCard from "../components/ui/GlassCard";
import { SparkleIcon, CheckIcon, CpuIcon, ActivityIcon, GridIcon } from "../components/ui/icons";

export default function About() {
  const { theme } = useTheme();

  return (
    <main className="flex-1 px-4 py-6 md:py-8">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-6">
        {/* Hero */}
        <GlassCard gradient className="p-6 animate-fade-up md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
                About this app
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold text-ink">
                A modern React experience
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                This project brings together routing, theming, authentication,
                and polished UI patterns in one compact dashboard.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.12)]">
                React Router
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
                Context API
              </span>
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.12)]">
                Tailwind UI
              </span>
            </div>
          </div>
        </GlassCard>

        <div className="grid flex-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Feature list */}
          <GlassCard className="card-lift p-6 animate-fade-up [animation-delay:100ms]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                <SparkleIcon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-ink">
                What this app includes
              </h2>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Smooth page navigation with React Router",
                "Shared theme switching across the full app",
                "Protected routes and user-friendly pages",
                "Clean settings and help sections for everyday use",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-edge bg-surface-2/40 px-4 py-2.5 transition-all hover:translate-x-1"
                >
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-cyan-500" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Why it matters */}
          <GlassCard className="card-lift p-6 animate-fade-up [animation-delay:200ms]">
            <h2 className="font-display text-xl font-bold text-ink">
              Why it matters
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Context API helps keep state simple by avoiding prop drilling,
              while React Router makes the app feel like a real product instead
              of a demo. This makes the structure easier to maintain and expand.
            </p>
            <div className="glass-card mt-4 rounded-2xl p-4 text-sm">
              <span className="text-ink-muted">Current theme: </span>
              <span className="font-semibold text-cyan-500">{theme}</span>
            </div>
          </GlassCard>
        </div>

        {/* Tech stack */}
        <GlassCard className="p-6 animate-fade-up [animation-delay:300ms]">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: CpuIcon,
                label: "Frontend",
                value: "React, Vite, React Router",
                accent: "text-cyan-500",
              },
              {
                icon: ActivityIcon,
                label: "State",
                value: "Context API and custom hooks",
                accent: "text-violet-500",
              },
              {
                icon: GridIcon,
                label: "Style",
                value: "Tailwind CSS with a modern card layout",
                accent: "text-blue-500",
              },
            ].map(({ icon: TechIconComponent, label, value, accent }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <TechIconComponent className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${accent}`}>{label}</p>
                  <p className="mt-1 text-sm text-ink-muted">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
