import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const profileInfo = [
  { label: "Name", value: "Amina Rahman" },
  { label: "Email", value: "amina@example.com" },
  { label: "Role", value: "Product Manager" },
];

export default function Profile() {
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <div
        className={clsx(
          "rounded-xl border p-6 shadow-sm",
          theme === "light"
            ? "border-slate-200 bg-white text-slate-800"
            : "border-slate-700 bg-slate-800 text-slate-100",
        )}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-500">
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
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-semibold text-white">
            AR
          </div>
          <div>
            <h3 className="text-lg font-semibold">Amina Rahman</h3>
            <p className="text-sm opacity-70">Product manager at Studio App</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {profileInfo.map((item) => (
            <div
              key={item.label}
              className={clsx(
                "rounded-lg border p-3",
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
