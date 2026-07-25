import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 px-4 py-10 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="w-full max-w-5xl space-y-8">
        <div
          className={clsx(
            "rounded-4xl border p-6 shadow-xl sm:p-10",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900 shadow-slate-950",
          )}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                About This App
              </h1>
              <p
                className={clsx(
                  "mt-3 max-w-2xl text-sm",
                  theme === "light" ? "text-slate-700" : "text-slate-300",
                )}
              >
                A polished dashboard-style page with a consistent dark theme and
                modern card styling across the app.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "border-slate-200 bg-slate-50"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              <h2 className="mb-4 text-2xl font-semibold">Theme status</h2>
              <p
                className={clsx(
                  "mb-4 leading-relaxed",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                This section now follows the same dark palette as the rest of
                the app, so the experience feels cohesive on every page.
              </p>
              <ul
                className={clsx(
                  "space-y-2",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                <li>
                  • Current theme: <strong>{theme}</strong>
                </li>
                <li>• Theme works across all pages through shared context</li>
                <li>• Light mode uses dark text for readability</li>
                <li>• Dark mode uses a deep slate palette for consistency</li>
              </ul>
            </section>

            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "border-slate-200 bg-slate-50"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              <h2 className="mb-4 text-2xl font-semibold">
                React Context API Demo
              </h2>
              <p
                className={clsx(
                  "mb-4 leading-relaxed",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                This application demonstrates the power of React's Context API
                combined with React Router v7. It shows how to manage global
                state without prop drilling and navigate between pages smoothly.
              </p>
              <p
                className={clsx(
                  "leading-relaxed",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                Built with modern React patterns, this project illustrates best
                practices for state management and routing in contemporary React
                apps.
              </p>
            </section>

            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "border-slate-200 bg-slate-50"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Frontend</h3>
                  <ul
                    className={clsx(
                      "space-y-2 text-sm",
                      theme === "light" ? "text-slate-950" : "text-slate-100",
                    )}
                  >
                    <li>✓ React 19</li>
                    <li>✓ React Router v7</li>
                    <li>✓ Context API</li>
                    <li>✓ Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Tools & Libraries</h3>
                  <ul
                    className={clsx(
                      "space-y-2 text-sm",
                      theme === "light" ? "text-slate-950" : "text-slate-100",
                    )}
                  >
                    <li>✓ Vite</li>
                    <li>✓ clsx</li>
                    <li>✓ ESLint</li>
                    <li>✓ JavaScript</li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "border-slate-200 bg-slate-50"
                  : "border-slate-700 bg-slate-800",
              )}
            >
              <h2 className="mb-4 text-2xl font-semibold">Why Context API?</h2>
              <p
                className={clsx(
                  "mb-4 leading-relaxed",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                Context API is React's built-in solution for global state
                management. It eliminates prop drilling and makes your component
                tree easier to maintain.
              </p>
              <p
                className={clsx(
                  "leading-relaxed",
                  theme === "light" ? "text-slate-950" : "text-slate-100",
                )}
              >
                With custom hooks like useTheme, you get a simple, scalable way
                to share state across the whole app without extra dependencies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
