import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={clsx(
        "flex min-h-screen items-center justify-center px-4 py-10 transition-colors duration-300",
        theme === "light" && "bg-white text-slate-900",
        theme === "dark" && "bg-slate-950 text-white",
      )}
    >
      <div className="w-full max-w-5xl space-y-8">
        <div
          className={clsx(
            "rounded-[2rem] border p-6 shadow-xl shadow-slate-900/5 sm:p-10",
            theme === "light"
              ? "bg-white border-slate-200"
              : "bg-slate-900 border-slate-800",
          )}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                About This App
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                A polished demo of React Context + React Router with a centered
                layout and a theme toggle built into the page.
              </p>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={clsx(
                "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200",
                theme === "light"
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-slate-100 text-slate-950 hover:bg-slate-200",
              )}
            >
              {theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
          </div>

          <div className="mt-8 grid gap-6">
            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "bg-purple-50 border-purple-200"
                  : "bg-purple-950 border-purple-700",
              )}
            >
              <h2 className="text-2xl font-semibold mb-4">
                React Context API Demo
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                This application demonstrates the power of React's Context API
                combined with React Router v7. It shows how to manage global
                state without prop drilling and navigate between pages smoothly.
              </p>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Built with modern React patterns, this project illustrates best
                practices for state management and routing in contemporary React
                apps.
              </p>
            </section>

            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "bg-green-50 border-green-200"
                  : "bg-green-950 border-green-700",
              )}
            >
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🎨</span>
                  <div>
                    <strong>Theme Toggle:</strong> Switch between light and dark
                    modes instantly.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">📦</span>
                  <div>
                    <strong>Global State Management:</strong> Theme state is
                    shared via Context API.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🛣️</span>
                  <div>
                    <strong>Client-Side Routing:</strong> Navigate between pages
                    with React Router v7.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">⚛️</span>
                  <div>
                    <strong>Custom Hooks:</strong> Reusable `useTheme` hook for
                    theme access everywhere.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💨</span>
                  <div>
                    <strong>Smooth Transitions:</strong> Theme switching is
                    animated for a polished feel.
                  </div>
                </li>
              </ul>
            </section>

            <section
              className={clsx(
                "rounded-3xl border p-6",
                theme === "light"
                  ? "bg-blue-50 border-blue-200"
                  : "bg-blue-950 border-blue-700",
              )}
            >
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ React 19</li>
                    <li>✓ React Router v7</li>
                    <li>✓ Context API</li>
                    <li>✓ Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Libraries</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
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
                  ? "bg-amber-50 border-amber-200"
                  : "bg-amber-950 border-amber-700",
              )}
            >
              <h2 className="text-2xl font-semibold mb-4">Why Context API?</h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                Context API is React's built-in solution for global state
                management. It eliminates prop drilling and makes your component
                tree easier to maintain.
              </p>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                With custom hooks like `useTheme`, you get a simple, scalable
                way to share state across the whole app without extra
                dependencies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
