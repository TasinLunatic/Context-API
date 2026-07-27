import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const helpCards = [
  {
    title: "About this app",
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
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 px-4 py-8 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <section
          className={clsx(
            "rounded-[28px] border p-8 shadow-xl",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900 shadow-slate-950",
          )}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Help Center
          </p>
          <h1 className="mt-2 text-3xl font-bold">Need help with this app?</h1>
          <p
            className={clsx(
              "mt-3 max-w-2xl text-sm",
              theme === "light" ? "text-slate-600" : "text-slate-300",
            )}
          >
            Here you can learn what this app does, how to manage your settings,
            and how to solve common problems.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {helpCards.map((card) => (
            <section
              key={card.title}
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p
                className={clsx(
                  "mt-2 text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-400",
                )}
              >
                {card.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section
          className={clsx(
            "rounded-[24px] border p-6 shadow-lg",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900",
          )}
        >
          <h2 className="text-xl font-semibold">Still stuck?</h2>
          <p
            className={clsx(
              "mt-2 text-sm",
              theme === "light" ? "text-slate-600" : "text-slate-400",
            )}
          >
            Try going back to the dashboard, reopening the page, or checking
            your internet connection. If the issue continues, review each
            section carefully and update the relevant settings again.
          </p>
        </section>
      </div>
    </main>
  );
}
