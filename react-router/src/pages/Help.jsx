import GlassCard from "../components/ui/GlassCard";
import { SparkleIcon, GearIcon, AlertIcon, HelpIcon } from "../components/ui/icons";

const helpCards = [
  {
    title: "About this app",
    icon: SparkleIcon,
    iconAccent: "text-cyan-500 bg-cyan-500/10",
    description:
      "This app demonstrates how a React project can combine routing, theme switching, authentication, and user settings in one smooth experience.",
    points: [
      "Explore the dashboard, profile, and settings pages.",
      "Switch between light and dark themes from the header.",
      "Use the sidebar to navigate between sections quickly.",
    ],
  },
  {
    title: "How to use settings",
    icon: GearIcon,
    iconAccent: "text-violet-500 bg-violet-500/10",
    description:
      "Open the Settings page to update your personal details, privacy preferences, location, and storage options.",
    points: [
      "Edit your profile information such as name, email, and phone.",
      "Turn privacy features on or off based on your preference.",
      "Adjust time management and sync preferences from the dedicated section.",
    ],
  },
  {
    title: "Common issues",
    icon: AlertIcon,
    iconAccent: "text-blue-500 bg-blue-500/10",
    description:
      "If something does not look right, these checks usually solve the problem quickly.",
    points: [
      "Refresh the page if changes do not appear immediately.",
      "Make sure you are logged in before visiting protected pages.",
      "Try switching themes or navigating back to the Home page if the layout looks off.",
    ],
  },
];

export default function Help() {
  return (
    <main className="flex-1 px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Hero */}
        <GlassCard gradient className="p-6 md:p-8 animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Help Center
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink">
            Need help with this app?
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Here you can learn what this app does, how to manage your settings,
            and how to solve common problems.
          </p>
        </GlassCard>

        {/* Help cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {helpCards.map((card, idx) => (
            <GlassCard
              key={card.title}
              className="card-lift p-6 animate-fade-up"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.iconAccent}`}
              >
                <card.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-ink">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                {card.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-cyan-500">•</span>
                    <span className="text-ink">{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Still stuck */}
        <GlassCard className="card-lift p-6 animate-fade-up [animation-delay:500ms]">
          <div className="flex items-start gap-3">
            <HelpIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-cyan-500" />
            <div>
              <h2 className="font-display text-xl font-bold text-ink">
                Still stuck?
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Try going back to the dashboard, reopening the page, or checking
                your internet connection. If the issue continues, review each
                section carefully and update the relevant settings again.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
