import { Link } from "react-router";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../contexts/AuthContext";
import { SparkleIcon, LogoutIcon } from "./ui/icons";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const displayName = user?.name ?? "Guest";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="glass-card sticky top-0 z-40 mx-4 mt-3 rounded-2xl px-5 py-2.5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400 via-blue-500 to-violet-500 shadow-glow-cyan">
            <SparkleIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="font-display text-lg font-bold text-gradient">
              NEXUS
            </span>
            <span className="ml-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-ink-muted">
              Dashboard
            </span>
          </div>
        </Link>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* User chip */}
          <div className="flex items-center gap-2 rounded-full border border-edge bg-surface-2/60 px-3 py-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-violet-500 text-xs font-bold text-white shadow-glow-cyan">
              {initial}
            </div>
            <span className="text-sm font-medium text-ink">
              {displayName}
            </span>
          </div>

          {/* Logout */}
          {isAuthenticated && (
            <button
              onClick={logout}
              className="flex items-center gap-1.5 rounded-xl border border-edge bg-surface-2/60 px-3 py-1.5 text-sm font-medium text-ink-muted transition-all duration-200 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-500"
              title="Sign out"
            >
              <LogoutIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-edge bg-surface-2/60 transition-all duration-200 hover:border-cyan-500/40 hover:shadow-glow-cyan"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="theme-toggle-icon theme-toggle-light absolute h-5 w-5 text-amber-500"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="theme-toggle-icon theme-toggle-dark absolute h-5 w-5 text-sky-400"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
