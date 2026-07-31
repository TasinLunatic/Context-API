import { Navigate, useParams, useSearchParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import GlassCard from "../components/ui/GlassCard";
import { UserIcon, GridIcon, ShieldIcon } from "../components/ui/icons";

export default function Profile() {
  const { profileID } = useParams();
  const [searchParams] = useSearchParams();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <main className="flex-1 p-4 md:p-8">
      <GlassCard gradient className="mx-auto max-w-4xl p-6 md:p-8 animate-fade-up">
        {/* Avatar row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-violet-500 p-[3px] shadow-glow-cyan">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 text-2xl font-bold text-ink">
                  {initial}
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 shadow-glow-emerald" />
              </span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                {user?.name || "User Profile"}
              </h2>
              <p className="text-sm text-ink-muted">
                {user?.email || "No email available"}
              </p>
            </div>
          </div>

          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.15)]">
            Active Account
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-cyan-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Profile ID
              </p>
            </div>
            <p className="font-display text-lg font-semibold text-ink">
              {profileID ?? "guest"}
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <GridIcon className="h-4 w-4 text-violet-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Current Mode
              </p>
            </div>
            <p className="font-display text-lg font-semibold text-ink">
              {searchParams.get("mode") ?? "none"}
            </p>
          </div>
        </div>

        {/* Welcome banner */}
        <div className="glass-card mt-8 rounded-2xl border-l-4 border-l-cyan-500 p-6">
          <div className="flex items-start gap-3">
            <ShieldIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
            <div>
              <p className="font-semibold text-ink">Welcome back!</p>
              <p className="mt-2 text-sm text-ink-muted">
                Your account is now active. You can continue browsing the app
                with your personalized profile information.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    </main>
  );
}
