import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Login({ compact = false }) {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // Mock login logic
    console.log("Login attempt:", { email, password });
    setError("");
    alert("Login successful! (Mock)");
    setEmail("");
    setPassword("");
  };

  const Wrapper = compact ? "div" : "main";

  return (
    <Wrapper
      className={clsx(
        compact
          ? "w-full"
          : "flex-1 p-8 transition-colors duration-300 flex items-center justify-center",
        !compact &&
          (theme === "light"
            ? "bg-white text-gray-800"
            : "bg-gray-800 text-white"),
      )}
    >
      <div className={compact ? "w-full" : "w-full max-w-md"}>
        <div
          className={clsx(
            compact ? "p-3 rounded-lg shadow-sm" : "p-8 rounded-lg shadow-lg",
            theme === "light" && "bg-gray-50 border border-gray-200",
            theme === "dark" && "bg-gray-700 border border-gray-600",
          )}
        >
          <h1
            className={clsx(
              "font-bold mb-2 text-center",
              compact ? "text-lg" : "text-3xl",
            )}
          >
            Welcome Back
          </h1>
          <p
            className={clsx(
              "text-center",
              compact ? "mb-3 text-xs" : "mb-8",
              theme === "light" ? "text-gray-600" : "text-gray-300",
            )}
          >
            Sign in to your account
          </p>

          <form
            onSubmit={handleSubmit}
            className={clsx("space-y-3", !compact && "space-y-5")}
          >
            <div>
              {!compact && (
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
              )}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={clsx(
                  "w-full rounded-lg border transition-colors focus:outline-none focus:ring-2",
                  compact ? "px-2 py-2 text-sm" : "px-4 py-2",
                  theme === "light"
                    ? "bg-white border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
                    : "bg-gray-600 border-gray-500 focus:ring-blue-400 text-white placeholder-gray-400",
                )}
              />
            </div>

            <div>
              {!compact && (
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
              )}
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={clsx(
                  "w-full rounded-lg border transition-colors focus:outline-none focus:ring-2",
                  compact ? "px-2 py-2 text-sm" : "px-4 py-2",
                  theme === "light"
                    ? "bg-white border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
                    : "bg-gray-600 border-gray-500 focus:ring-blue-400 text-white placeholder-gray-400",
                )}
              />
            </div>

            {error && (
              <div
                className={clsx(
                  "p-3 rounded-lg text-sm",
                  theme === "light"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-red-900/30 text-red-200 border border-red-700",
                )}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className={clsx(
                "w-full rounded-lg font-semibold transition-colors",
                compact ? "py-2 px-3 text-sm" : "py-2 px-4",
                theme === "light"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600",
              )}
            >
              Sign In
            </button>
          </form>

          {!compact && (
            <div
              className={clsx(
                "mt-6 pt-6 border-t text-center text-sm",
                theme === "light"
                  ? "border-gray-200 text-gray-600"
                  : "border-gray-600 text-gray-300",
              )}
            >
              Demo credentials:
              <p className="mt-2 font-mono text-xs">
                Email: demo@example.com
                <br />
                Password: any password
              </p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
