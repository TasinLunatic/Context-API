import clsx from "clsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email);
    navigate("/dashboard");
  };

  return (
    <div
      className={clsx(
        "relative flex min-h-screen items-center justify-center px-4 py-8 transition-colors duration-300",
        theme === "light"
          ? "bg-gradient-to-br from-violet-50 via-white to-slate-100 text-slate-800"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 text-slate-100",
      )}
    >
      <button
        type="button"
        onClick={toggleTheme}
        className={clsx(
          "absolute right-4 top-4 rounded-lg px-4 py-2 font-medium transition-colors duration-300",
          theme === "light"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-white text-gray-800 hover:bg-gray-100",
        )}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <form
        onSubmit={handleSubmit}
        className={clsx(
          "w-full max-w-md rounded-xl border p-8 shadow-xl",
          theme === "light"
            ? "border-slate-200 bg-white"
            : "border-slate-700 bg-slate-800",
        )}
      >
        <div className="mb-8">
          <p
            className={clsx(
              "mb-2 text-sm font-semibold uppercase tracking-wide",
              theme === "light" ? "text-violet-600" : "text-emerald-400",
            )}
          >
            Welcome back
          </p>
          <h1 className="text-3xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm opacity-70">
            Access your dashboard and manage your workspace.
          </p>
        </div>

        <div className="space-y-5">
          <label className="block text-sm font-medium">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className={clsx(
                "mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2",
                theme === "light"
                  ? "border-slate-300 bg-slate-50 focus:border-violet-500 focus:ring-violet-200"
                  : "border-slate-600 bg-slate-900 focus:border-emerald-400 focus:ring-emerald-400/30",
              )}
            />
          </label>

          <label className="block text-sm font-medium">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              minLength={6}
              autoComplete="current-password"
              className={clsx(
                "mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:ring-2",
                theme === "light"
                  ? "border-slate-300 bg-slate-50 focus:border-violet-500 focus:ring-violet-200"
                  : "border-slate-600 bg-slate-900 focus:border-emerald-400 focus:ring-emerald-400/30",
              )}
            />
          </label>
        </div>

        <button
          type="submit"
          className={clsx(
            "mt-7 w-full rounded-lg px-4 py-3 font-semibold shadow-sm cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md",
            theme === "light"
              ? "bg-violet-600 text-white hover:bg-violet-700"
              : "bg-emerald-500 text-slate-950 hover:bg-emerald-400",
          )}
        >
          Sign in
        </button>

        <p className="mt-6 text-center text-sm opacity-75">
          New to the workspace?{" "}
          <Link
            to="/create-account"
            className={clsx(
              "font-semibold underline-offset-4 hover:underline",
              theme === "light" ? "text-violet-600" : "text-emerald-400",
            )}
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
