import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import GlassCard from "../components/ui/GlassCard";
import { MailIcon, LockIcon, SparkleIcon } from "../components/ui/icons";

export default function Login() {
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
    <main className="relative flex min-h-screen items-center justify-center p-6">
      <GlassCard gradient className="w-full max-w-md p-8 animate-fade-up">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-glow-cyan">
            <SparkleIcon className="h-7 w-7 text-white" />
          </div>
        </div>

        <h1 className="text-center font-display text-3xl font-bold text-ink">
          Welcome Back
        </h1>
        <p className="mb-8 mt-2 text-center text-ink-muted">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Email Address
            </label>
            <div className="relative">
              <MailIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field pl-10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Password
            </label>
            <div className="relative">
              <LockIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field pl-10"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500 shadow-[0_0_16px_rgba(239,68,68,0.12)]">
              {error}
            </div>
          )}

          <button type="submit" className="btn-primary w-full rounded-xl py-2.5">
            Sign In
          </button>
        </form>

        <div className="glass-card mt-6 rounded-2xl p-4 text-center">
          <p className="text-xs font-medium text-ink-muted">
            Demo credentials
          </p>
          <p className="mt-1.5 font-mono text-xs text-ink-muted">
            Email: demo@example.com
            <br />
            Password: any password
          </p>
        </div>
      </GlassCard>
    </main>
  );
}
