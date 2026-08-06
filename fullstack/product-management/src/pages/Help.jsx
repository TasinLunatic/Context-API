import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const helpItems = [
  "Need help? Start with the dashboard overview.",
  "Check your profile details if you need to update information.",
  "Visit settings to customize your preferences.",
];

export default function Help() {
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <div
        className={clsx(
          "rounded-xl border p-6 shadow-sm transition-colors duration-300",
          theme === "light"
            ? "border-slate-200 bg-white text-slate-800"
            : "border-slate-700 bg-slate-800 text-slate-100",
        )}
      >
        <p
          className={clsx(
            "mb-2 text-sm font-semibold uppercase tracking-wide",
            theme === "light" ? "text-violet-600" : "text-emerald-400",
          )}
        >
          Help
        </p>
        <h2 className="text-2xl font-semibold">Need support?</h2>
        <p className="mt-2 text-sm opacity-80">
          This page gives quick guidance for using the app.
        </p>
      </div>

      <div
        className={clsx(
          "rounded-xl border p-5 shadow-sm",
          theme === "light"
            ? "border-slate-200 bg-slate-50"
            : "border-slate-700 bg-slate-900",
        )}
      >
        <ul className="space-y-3">
          {helpItems.map((item) => (
            <li
              key={item}
              className={clsx(
                "rounded-lg border p-3 transition-colors duration-300",
                theme === "light"
                  ? "border-slate-200 bg-white"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
