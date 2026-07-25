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
        "flex-1 p-8 transition-colors duration-300 flex items-center justify-center",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white",
      )}
    >
      <div className="w-full max-w-md">
        <div
          className={clsx(
            "p-8 rounded-lg shadow-lg",
            theme === "light" && "bg-gray-50 border border-gray-200",
            theme === "dark" && "bg-gray-700 border border-gray-600",
          )}
        >
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p
            className={clsx(
              "text-center mb-8",
              theme === "light" ? "text-gray-600" : "text-gray-300",
            )}
          >
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={clsx(
                  "w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2",
                  theme === "light"
                    ? "bg-white border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
                    : "bg-gray-600 border-gray-500 focus:ring-blue-400 text-white placeholder-gray-400",
                )}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
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
                  "w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2",
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
                "w-full py-2 px-4 rounded-lg font-semibold transition-colors",
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
        </div>
      </div>
    </main>
  );
}
