import { Link } from "react-router";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex flex-1 items-center justify-center p-8 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="w-full max-w-2xl text-center">
        <div
          className={clsx(
            "rounded-xl border p-8",
            theme === "light"
              ? "border-slate-200 bg-white"
              : "border-slate-800 bg-slate-900",
          )}
        >
          <div className="mb-8">
            <h1 className="mb-4 text-8xl font-bold">
              <span
                className={clsx(
                  theme === "light" ? "text-red-600" : "text-red-500",
                )}
              >
                4
              </span>
              <span
                className={clsx(
                  theme === "light" ? "text-blue-600" : "text-blue-500",
                )}
              >
                0
              </span>
              <span
                className={clsx(
                  theme === "light" ? "text-yellow-600" : "text-yellow-500",
                )}
              >
                4
              </span>
            </h1>
            <p className="mb-4 text-5xl">🚀</p>
          </div>

          <h2 className="mb-4 text-4xl font-bold">Page Not Found</h2>
          <p
            className={clsx(
              "mb-8 text-lg",
              theme === "light" ? "text-slate-600" : "text-slate-300",
            )}
          >
            Oops! The page you're looking for has drifted into space. It might
            have been moved, deleted, or never existed in the first place.
          </p>

          <div
            className={clsx(
              "mb-8 rounded-lg border p-4 text-left",
              theme === "light"
                ? "border-red-200 bg-red-50"
                : "border-red-700 bg-red-900/30",
            )}
          >
            <p
              className={clsx(
                "text-sm font-mono",
                theme === "light" ? "text-red-700" : "text-red-200",
              )}
            >
              Error: Route not defined
              <br />
              Status: 404
              <br />
              Path: {window.location.pathname}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/">
              <button
                className={clsx(
                  "rounded-lg px-8 py-3 font-semibold transition-colors",
                  theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600",
                )}
              >
                🏠 Back to Home
              </button>
            </Link>
            <Link to="/about">
              <button
                className={clsx(
                  "rounded-lg px-8 py-3 font-semibold transition-colors",
                  theme === "light"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-500 text-white hover:bg-purple-600",
                )}
              >
                ℹ️ About
              </button>
            </Link>
            <Link to="/login">
              <button
                className={clsx(
                  "rounded-lg px-8 py-3 font-semibold transition-colors",
                  theme === "light"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600",
                )}
              >
                🔐 Login
              </button>
            </Link>
          </div>

          <div
            className={clsx(
              "mt-8 rounded-lg border p-6",
              theme === "light"
                ? "border-blue-200 bg-blue-50"
                : "border-blue-700 bg-blue-900/30",
            )}
          >
            <p
              className={clsx(
                "text-sm",
                theme === "light" ? "text-blue-700" : "text-blue-200",
              )}
            >
              <strong>Fun Fact:</strong> The 404 error code comes from the HTTP
              status code system. It means "Not Found" and was named after a
              room number in the old CERN headquarters where the World Wide Web
              was invented! 🌐
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
