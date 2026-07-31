import { useState } from "react";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../contexts/AuthContext";
import GlassCard from "./ui/GlassCard";
import StatCard from "./ui/StatCard";
import {
  GridIcon,
  UserIcon,
  ActivityIcon,
  StorageIcon,
  CheckIcon,
  SparkleIcon,
} from "./ui/icons";

export default function MainContent() {
  const { theme } = useTheme();
  const { user, updateName } = useAuth();
  const [nameInput, setNameInput] = useState(user?.name ?? "");
  const [saved, setSaved] = useState(false);

  const handleUpdateName = () => {
    if (!nameInput.trim()) return;
    updateName(nameInput.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUpdateName();
  };

  return (
    <main className="flex-1 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Hero */}
        <div className="animate-fade-up">
          <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Welcome back,{" "}
            <span className="text-gradient">{user?.name ?? "Guest"}</span>
          </h1>
          <p className="mt-2 text-ink-muted">
            Here&apos;s what&apos;s happening with your command center today.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="[animation-delay:80ms] animate-fade-up">
            <StatCard
              icon={ActivityIcon}
              label="Active Sessions"
              value={128}
              accent="cyan"
            />
          </div>
          <div className="[animation-delay:160ms] animate-fade-up">
            <StatCard
              icon={GridIcon}
              label="Tasks Completed"
              value={1024}
              accent="violet"
            />
          </div>
          <div className="[animation-delay:240ms] animate-fade-up">
            <StatCard
              icon={StorageIcon}
              label="Storage Used"
              value={74}
              suffix="%"
              accent="blue"
            />
          </div>
          <div className="[animation-delay:320ms] animate-fade-up">
            <StatCard
              icon={SparkleIcon}
              label="Uptime"
              value={99.9}
              suffix="%"
              decimals={1}
              accent="emerald"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Context API explainer */}
          <GlassCard className="animate-fade-up p-6 [animation-delay:400ms]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                <SparkleIcon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-ink">
                What you&apos;re seeing
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                {
                  label: "Current theme",
                  value: theme.charAt(0).toUpperCase() + theme.slice(1),
                },
                {
                  label: "Current user",
                  value: user?.name ?? "Guest",
                },
                {
                  label: "State sharing",
                  value: "Context API — zero prop drilling!",
                },
                {
                  label: "Theme control",
                  value: "Toggle in header changes everything",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-edge bg-surface-2/40 px-4 py-2.5 text-sm"
                >
                  <CheckIcon className="h-4 w-4 flex-shrink-0 text-cyan-500" />
                  <span className="text-ink-muted">{item.label}:</span>
                  <span className="font-semibold text-ink">{item.value}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Update user name */}
          <GlassCard className="animate-fade-up p-6 [animation-delay:500ms]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <UserIcon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-bold text-ink">
                Update User Name
              </h2>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => {
                  setNameInput(e.target.value);
                  setSaved(false);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter new display name"
                className="input-field flex-1"
              />
              <button onClick={handleUpdateName} className="btn-primary">
                Update
              </button>
            </div>
            {saved && (
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-emerald-500 animate-fade-up">
                <CheckIcon className="h-4 w-4" />
                Name updated successfully!
              </p>
            )}
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
