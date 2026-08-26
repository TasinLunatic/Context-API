import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
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
          About
        </p>
        <h2 className="text-2xl font-semibold">About this app</h2>
        <p className="mt-2 text-sm opacity-80">
          This is a simple React app built to demonstrate theme and route-based
          navigation.
        </p>
      </div>
    </section>
  );
}
