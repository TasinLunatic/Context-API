import { useState } from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
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

    login(email);
    setError("");
    setEmail("");
    setPassword("");
    navigate("/profile/guest");
  };

  return (
    <main
      className={clsx(
        "flex flex-1 items-center justify-center p-8 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="w-full max-w-md">
        <div
          className={clsx(
            "rounded-xl border p-8 shadow-lg",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900 shadow-slate-950",
          )}
        >
          <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>
          <p
            className={clsx(
              "mb-8 text-center",
              theme === "light" ? "text-slate-600" : "text-slate-300",
            )}
          >
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950 placeholder-slate-400 focus:ring-blue-500"
                    : "border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-400 focus:ring-blue-400",
                )}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950 placeholder-slate-400 focus:ring-blue-500"
                    : "border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-400 focus:ring-blue-400",
                )}
              />
            </div>

            {error && (
              <div
                className={clsx(
                  "rounded-lg border p-3 text-sm",
                  theme === "light"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-red-700 bg-red-900/30 text-red-200",
                )}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className={clsx(
                "w-full rounded-lg px-4 py-2 font-semibold transition-colors",
                theme === "light"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600",
              )}
            >
              Sign In
            </button>
          </form>

          <div
            className={clsx(
              "mt-6 border-t pt-6 text-center text-sm",
              theme === "light"
                ? "border-slate-200 text-slate-600"
                : "border-slate-700 text-slate-300",
            )}
          >
            Demo credentials:
            <p className="mt-2 font-mono text-xs">
              Email: demo@example.com
              <br />
              Password: any password
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
