import { Link } from "react-router";
import GlassCard from "../components/ui/GlassCard";
import { RocketIcon } from "../components/ui/icons";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-6">
      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-80 w-80 animate-float-slow rounded-full bg-violet-500/10 blur-3xl" />

      <GlassCard gradient className="w-full max-w-2xl p-8 text-center animate-fade-up md:p-10">
        {/* Animated 404 */}
        <div className="mb-6 flex items-center justify-center gap-1">
          {[
            { digit: "4", delay: "0ms", accent: "text-cyan-500" },
            { digit: "0", delay: "300ms", accent: "text-blue-500" },
            { digit: "4", delay: "600ms", accent: "text-violet-500" },
          ].map(({ digit, delay, accent }) => (
            <span
              key={delay}
              className={`font-display text-[7rem] font-bold leading-none animate-float md:text-[8rem] ${accent}`}
              style={{
                animationDelay: delay,
                filter: "drop-shadow(0 0 28px currentColor)",
              }}
            >
              {digit}
            </span>
          ))}
        </div>

        {/* Rocket */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <RocketIcon className="h-5 w-5 animate-float" />
            Lost in space
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
          Page Not Found
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          Oops! The page you&apos;re looking for has drifted into space. It
          might have been moved, deleted, or never existed in the first place.
        </p>

        {/* Error terminal */}
        <div className="mx-auto mt-6 max-w-sm rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-left font-mono text-xs shadow-[0_0_24px_rgba(239,68,68,0.1)]">
          <p className="text-red-500">
            Error: Route not defined
            <br />
            Status: 404
            <br />
            Path: {typeof window !== "undefined" ? window.location.pathname : ""}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/">
            <button className="btn-primary rounded-xl">Back to Home</button>
          </Link>
          <Link to="/about">
            <button className="rounded-xl border border-edge px-6 py-2.5 font-semibold text-ink-muted transition-all hover:border-violet-500/40 hover:text-ink hover:shadow-glow-violet">
              About
            </button>
          </Link>
          <Link to="/login">
            <button className="rounded-xl border border-edge px-6 py-2.5 font-semibold text-ink-muted transition-all hover:border-emerald-500/40 hover:text-ink hover:shadow-glow-emerald">
              Login
            </button>
          </Link>
        </div>

        {/* Fun fact */}
        <div className="glass-card mt-8 rounded-xl p-5 text-sm text-ink-muted">
          <strong className="text-ink">Fun Fact:</strong> The 404 error code
          comes from the HTTP status code system. It means &quot;Not Found&quot;
          and was named after a room number in the old CERN headquarters where
          the World Wide Web was invented! 🌐
        </div>
      </GlassCard>
    </main>
  );
}
