import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const profileInfo = [
  { label: "Name", value: "Tasin" },
  { label: "Email", value: "tasin207@gmail.com" },
  { label: "Role", value: "Developer" },
];

export default function Profile() {
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
          Profile
        </p>
        <h2 className="text-2xl font-semibold">Your profile</h2>
        <p className="mt-2 text-sm opacity-80">
          A simple profile section linked from the sidebar.
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
        <div className="flex items-center gap-4">
          <div
            className={clsx(
              "flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold text-white",
              theme === "light" ? "bg-violet-600" : "bg-emerald-500",
            )}
          >
            TA
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tasin</h3>
            <p className="text-sm opacity-70">Developer at Studio App</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {profileInfo.map((item) => (
            <div
              key={item.label}
              className={clsx(
                "rounded-lg border p-3 transition-colors duration-300",
                theme === "light"
                  ? "border-slate-200 bg-white"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              <p className="text-sm opacity-70">{item.label}</p>
              <p className="mt-1 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
