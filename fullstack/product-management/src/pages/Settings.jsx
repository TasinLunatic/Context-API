import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const settingsOptions = [
  { label: "Notifications", value: "Enabled" },
  { label: "Language", value: "English" },
  { label: "Privacy", value: "Standard" },
];

export default function Settings() {
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
          Settings
        </p>
        <h2 className="text-2xl font-semibold">Manage your preferences</h2>
        <p className="mt-2 text-sm opacity-80">
          Adjust simple settings for your workspace.
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
        {settingsOptions.map((option) => (
          <div
            key={option.label}
            className={clsx(
              "flex items-center justify-between rounded-lg border px-4 py-3 transition-colors duration-300",
              theme === "light"
                ? "border-slate-200 bg-white"
                : "border-slate-700 bg-slate-800",
            )}
          >
            <span className="font-medium">{option.label}</span>
            <span className="text-sm opacity-70">{option.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
