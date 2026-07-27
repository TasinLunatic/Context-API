import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 px-4 py-4 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-4">
        <section
          className={clsx(
            "rounded-[24px] border p-5 shadow-lg",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900 shadow-slate-950",
          )}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
                About this app
              </p>
              <h1 className="mt-2 text-3xl font-bold">
                A modern React experience
              </h1>
              <p
                className={clsx(
                  "mt-2 max-w-2xl text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-300",
                )}
              >
                This project brings together routing, theming, authentication,
                and polished UI patterns in one compact dashboard.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500">
                React Router
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500">
                Context API
              </span>
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-500">
                Tailwind UI
              </span>
            </div>
          </div>
        </section>

        <div className="grid flex-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section
            className={clsx(
              "rounded-[24px] border p-5 shadow-lg",
              theme === "light"
                ? "border-slate-200 bg-white shadow-slate-200"
                : "border-slate-800 bg-slate-900",
            )}
          >
            <h2 className="text-xl font-semibold">What this app includes</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li
                className={clsx(
                  "rounded-lg px-3 py-2",
                  theme === "light"
                    ? "bg-slate-100 text-slate-950"
                    : "bg-slate-800 text-slate-100",
                )}
              >
                • Smooth page navigation with React Router
              </li>
              <li
                className={clsx(
                  "rounded-lg px-3 py-2",
                  theme === "light"
                    ? "bg-slate-100 text-slate-950"
                    : "bg-slate-800 text-slate-100",
                )}
              >
                • Shared theme switching across the full app
              </li>
              <li
                className={clsx(
                  "rounded-lg px-3 py-2",
                  theme === "light"
                    ? "bg-slate-100 text-slate-950"
                    : "bg-slate-800 text-slate-100",
                )}
              >
                • Protected routes and user-friendly pages
              </li>
              <li
                className={clsx(
                  "rounded-lg px-3 py-2",
                  theme === "light"
                    ? "bg-slate-100 text-slate-950"
                    : "bg-slate-800 text-slate-100",
                )}
              >
                • Clean settings and help sections for everyday use
              </li>
            </ul>
          </section>

          <section
            className={clsx(
              "rounded-[24px] border p-5 shadow-lg",
              theme === "light"
                ? "border-slate-200 bg-white shadow-slate-200"
                : "border-slate-800 bg-slate-900",
            )}
          >
            <h2 className="text-xl font-semibold">Why it matters</h2>
            <p
              className={clsx(
                "mt-3 text-sm leading-6",
                theme === "light" ? "text-slate-600" : "text-slate-300",
              )}
            >
              Context API helps keep state simple by avoiding prop drilling,
              while React Router makes the app feel like a real product instead
              of a demo. This makes the structure easier to maintain and expand.
            </p>
            <div className="mt-4 rounded-2xl bg-cyan-500/10 p-4 text-sm text-cyan-600 dark:text-cyan-400">
              Current theme: <span className="font-semibold">{theme}</span>
            </div>
          </section>
        </div>

        <section
          className={clsx(
            "rounded-[24px] border p-5 shadow-lg",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900",
          )}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-cyan-500">Frontend</p>
              <p className="mt-1 text-sm">React, Vite, React Router</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-500">State</p>
              <p className="mt-1 text-sm">Context API and custom hooks</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-500">Style</p>
              <p className="mt-1 text-sm">
                Tailwind CSS with a modern card layout
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
