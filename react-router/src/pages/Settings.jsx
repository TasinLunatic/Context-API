import { useState } from "react";
import GlassCard from "../components/ui/GlassCard";
import Toggle from "../components/ui/Toggle";
import { GearIcon, ShieldIcon, ClockIcon, StorageIcon } from "../components/ui/icons";

export default function Settings() {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    bio: "I love building apps with React and Context API.",
    timezone: "Asia/Dhaka",
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showActivity: false,
    emailAlerts: true,
  });

  const [timeManagement, setTimeManagement] = useState({
    autoSync: true,
    offlineMode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex-1 px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Hero */}
        <GlassCard gradient className="p-6 md:p-8 animate-fade-up">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
                Account Preferences
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold text-ink">
                Settings Dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Fine-tune your profile, privacy, schedule, and storage in one
                elegant place.
              </p>
            </div>
            <button type="button" className="btn-primary rounded-full">
              Save all changes
            </button>
          </div>
        </GlassCard>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* Left column */}
          <div className="space-y-6">
            {/* Personal Information */}
            <GlassCard className="p-6 animate-fade-up [animation-delay:100ms]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">
                    Keep your profile details updated.
                  </p>
                </div>
                <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.12)]">
                  <GearIcon className="mr-1.5 inline-block h-3.5 w-3.5" />
                  Profile
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phone", type: "text" },
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label className="mb-2 block text-sm font-semibold text-ink">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink">
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-ink">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="4"
                  value={formData.bio}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </GlassCard>

            {/* Privacy Settings */}
            <GlassCard className="p-6 animate-fade-up [animation-delay:200ms]">
              <div className="mb-1 flex items-center gap-2">
                <ShieldIcon className="h-5 w-5 text-violet-500" />
                <h2 className="font-display text-xl font-bold text-ink">
                  Privacy Settings
                </h2>
              </div>
              <p className="mb-5 text-sm text-ink-muted">
                Control who can see your profile and notifications.
              </p>
              <div className="space-y-3">
                <Toggle
                  label="Public profile"
                  description="Allow others to view your profile card"
                  enabled={privacy.profileVisible}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      profileVisible: !prev.profileVisible,
                    }))
                  }
                />
                <Toggle
                  label="Activity status"
                  description="Show when you are active in the app"
                  enabled={privacy.showActivity}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      showActivity: !prev.showActivity,
                    }))
                  }
                />
                <Toggle
                  label="Email alerts"
                  description="Receive weekly updates and reminders"
                  enabled={privacy.emailAlerts}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      emailAlerts: !prev.emailAlerts,
                    }))
                  }
                />
              </div>
            </GlassCard>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Time Management */}
            <GlassCard className="p-6 animate-fade-up [animation-delay:300ms]">
              <div className="mb-1 flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <h2 className="font-display text-xl font-bold text-ink">
                  Time Management
                </h2>
              </div>
              <p className="mb-5 text-sm text-ink-muted">
                Manage sync and working hours.
              </p>
              <div className="space-y-3">
                <Toggle
                  label="Auto sync"
                  description="Synchronize changes automatically"
                  enabled={timeManagement.autoSync}
                  onToggle={() =>
                    setTimeManagement((prev) => ({
                      ...prev,
                      autoSync: !prev.autoSync,
                    }))
                  }
                />
                <Toggle
                  label="Offline mode"
                  description="Work without internet connection"
                  enabled={timeManagement.offlineMode}
                  onToggle={() =>
                    setTimeManagement((prev) => ({
                      ...prev,
                      offlineMode: !prev.offlineMode,
                    }))
                  }
                />
              </div>
            </GlassCard>

            {/* Location */}
            <GlassCard className="p-6 animate-fade-up [animation-delay:400ms]">
              <h2 className="font-display text-xl font-bold text-ink">
                Location
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Update your current region and address.
              </p>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-ink">
                  Current Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </GlassCard>

            {/* Storage */}
            <GlassCard className="p-6 animate-fade-up [animation-delay:500ms]">
              <div className="mb-1 flex items-center gap-2">
                <StorageIcon className="h-5 w-5 text-emerald-500" />
                <h2 className="font-display text-xl font-bold text-ink">
                  Storage
                </h2>
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                Manage your saved data and cloud usage.
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-ink-muted">Used storage</span>
                    <span className="font-semibold text-ink">74%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-edge">
                    <div className="relative h-full w-[74%] rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-glow-cyan">
                      <span className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/25 blur-sm" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" className="btn-primary rounded-full text-sm">
                    Clear cache
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-edge px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:border-cyan-500/40 hover:text-ink"
                  >
                    Upgrade plan
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
