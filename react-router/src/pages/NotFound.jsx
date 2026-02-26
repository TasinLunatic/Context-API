import { Link } from "react-router";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 p-8 transition-colors duration-300 flex items-center justify-center",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <div className="w-full max-w-2xl text-center">
        <div
          className={clsx(
            "p-8 rounded-lg",
            theme === "light" && "bg-gray-50 border border-gray-200",
            theme === "dark" && "bg-gray-700 border border-gray-600"
          )}
        >
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold mb-4">
              <span className={clsx(
                theme === "light" ? "text-red-600" : "text-red-500"
              )}>
                4
              </span>
              <span className={clsx(
                theme === "light" ? "text-blue-600" : "text-blue-500"
              )}>
                0
              </span>
              <span className={clsx(
                theme === "light" ? "text-yellow-600" : "text-yellow-500"
              )}>
                4
              </span>
            </h1>
            <p className="text-5xl mb-4">🚀</p>
          </div>

          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p
            className={clsx(
              "text-lg mb-8",
              theme === "light" ? "text-gray-600" : "text-gray-300"
            )}
          >
            Oops! The page you're looking for has drifted into space. It might have been moved,
            deleted, or never existed in the first place.
          </p>

          {/* Error Details */}
          <div
            className={clsx(
              "p-4 rounded-lg mb-8 text-left",
              theme === "light"
                ? "bg-red-50 border border-red-200"
                : "bg-red-900/30 border border-red-700"
            )}
          >
            <p className={clsx(
              "text-sm font-mono",
              theme === "light" ? "text-red-700" : "text-red-200"
            )}>
              Error: Route not defined
              <br />
              Status: 404
              <br />
              Path: {window.location.pathname}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button
                className={clsx(
                  "px-8 py-3 rounded-lg font-semibold transition-colors",
                  theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                )}
              >
                🏠 Back to Home
              </button>
            </Link>
            <Link to="/about">
              <button
                className={clsx(
                  "px-8 py-3 rounded-lg font-semibold transition-colors",
                  theme === "light"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                )}
              >
                ℹ️ About
              </button>
            </Link>
            <Link to="/login">
              <button
                className={clsx(
                  "px-8 py-3 rounded-lg font-semibold transition-colors",
                  theme === "light"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                )}
              >
                🔐 Login
              </button>
            </Link>
          </div>

          {/* Fun Fact */}
          <div
            className={clsx(
              "mt-8 p-6 rounded-lg",
              theme === "light"
                ? "bg-blue-50 border border-blue-200"
                : "bg-blue-900/30 border border-blue-700"
            )}
          >
            <p className={clsx(
              "text-sm",
              theme === "light" ? "text-blue-700" : "text-blue-200"
            )}>
              <strong>Fun Fact:</strong> The 404 error code comes from the HTTP status code system.
              It means "Not Found" and was named after a room number in the old CERN headquarters
              where the World Wide Web was invented! 🌐
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
