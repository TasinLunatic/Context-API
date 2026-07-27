import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

function ToggleRow({ label, description, enabled, onToggle, theme }) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-2xl border p-4",
        theme === "light"
          ? "border-slate-200 bg-slate-50"
          : "border-slate-800 bg-slate-800/60",
      )}
    >
      <div>
        <p className="font-semibold">{label}</p>
        <p
          className={clsx(
            "mt-1 text-sm",
            theme === "light" ? "text-slate-600" : "text-slate-400",
          )}
        >
          {description}
        </p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "relative h-7 w-14 rounded-full transition-all",
          enabled
            ? "bg-emerald-500"
            : theme === "light"
              ? "bg-slate-300"
              : "bg-slate-700",
        )}
      >
        <span
          className={clsx(
            "absolute top-1 h-5 w-5 rounded-full bg-white transition-all",
            enabled ? "left-8" : "left-1",
          )}
        />
      </button>
    </div>
  );
}

export default function Settings() {
  const { theme } = useTheme();
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

  const inputClassName = clsx(
    "w-full rounded-xl border px-4 py-2.5 outline-none transition",
    theme === "light"
      ? "border-slate-300 bg-white text-slate-950"
      : "border-slate-700 bg-slate-800 text-slate-100",
  );

  return (
    <main
      className={clsx(
        "flex-1 px-4 py-8 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <div
          className={clsx(
            "rounded-[28px] border p-8 shadow-xl",
            theme === "light"
              ? "border-slate-200 bg-white shadow-slate-200"
              : "border-slate-800 bg-slate-900 shadow-slate-950",
          )}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
                Account Preferences
              </p>
              <h1 className="mt-2 text-3xl font-bold">Settings Dashboard</h1>
              <p
                className={clsx(
                  "mt-2 max-w-2xl text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-300",
                )}
              >
                Fine-tune your profile, privacy, schedule, and storage in one
                elegant place.
              </p>
            </div>
            <button
              type="button"
              className={clsx(
                "rounded-full px-4 py-2 font-semibold",
                theme === "light"
                  ? "bg-slate-900 text-white"
                  : "bg-cyan-500 text-slate-950",
              )}
            >
              Save all changes
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    Personal Information
                  </h2>
                  <p
                    className={clsx(
                      "mt-1 text-sm",
                      theme === "light" ? "text-slate-600" : "text-slate-400",
                    )}
                  >
                    Keep your profile details updated.
                  </p>
                </div>
                <div className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500">
                  Profile
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold">Bio</label>
                <textarea
                  name="bio"
                  rows="4"
                  value={formData.bio}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </div>
            </section>

            <section
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <h2 className="text-xl font-semibold">Privacy Settings</h2>
              <p
                className={clsx(
                  "mt-1 text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-400",
                )}
              >
                Control who can see your profile and notifications.
              </p>
              <div className="mt-5 space-y-3">
                <ToggleRow
                  label="Public profile"
                  description="Allow others to view your profile card"
                  enabled={privacy.profileVisible}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      profileVisible: !prev.profileVisible,
                    }))
                  }
                  theme={theme}
                />
                <ToggleRow
                  label="Activity status"
                  description="Show when you are active in the app"
                  enabled={privacy.showActivity}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      showActivity: !prev.showActivity,
                    }))
                  }
                  theme={theme}
                />
                <ToggleRow
                  label="Email alerts"
                  description="Receive weekly updates and reminders"
                  enabled={privacy.emailAlerts}
                  onToggle={() =>
                    setPrivacy((prev) => ({
                      ...prev,
                      emailAlerts: !prev.emailAlerts,
                    }))
                  }
                  theme={theme}
                />
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <h2 className="text-xl font-semibold">Time Management</h2>
              <p
                className={clsx(
                  "mt-1 text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-400",
                )}
              >
                Manage sync and working hours.
              </p>
              <div className="mt-5 space-y-3">
                <ToggleRow
                  label="Auto sync"
                  description="Synchronize changes automatically"
                  enabled={timeManagement.autoSync}
                  onToggle={() =>
                    setTimeManagement((prev) => ({
                      ...prev,
                      autoSync: !prev.autoSync,
                    }))
                  }
                  theme={theme}
                />
                <ToggleRow
                  label="Offline mode"
                  description="Work without internet connection"
                  enabled={timeManagement.offlineMode}
                  onToggle={() =>
                    setTimeManagement((prev) => ({
                      ...prev,
                      offlineMode: !prev.offlineMode,
                    }))
                  }
                  theme={theme}
                />
              </div>
            </section>

            <section
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <h2 className="text-xl font-semibold">Location</h2>
              <p
                className={clsx(
                  "mt-1 text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-400",
                )}
              >
                Update your current region and address.
              </p>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Current Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClassName}
                />
              </div>
            </section>

            <section
              className={clsx(
                "rounded-[24px] border p-6 shadow-lg",
                theme === "light"
                  ? "border-slate-200 bg-white shadow-slate-200"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <h2 className="text-xl font-semibold">Storage</h2>
              <p
                className={clsx(
                  "mt-1 text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-400",
                )}
              >
                Manage your saved data and cloud usage.
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>Used storage</span>
                    <span className="font-semibold">74%</span>
                  </div>
                  <div
                    className={clsx(
                      "h-2 rounded-full",
                      theme === "light" ? "bg-slate-200" : "bg-slate-800",
                    )}
                  >
                    <div className="h-2 w-[74%] rounded-full bg-cyan-500" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm font-semibold",
                      theme === "light"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-950",
                    )}
                  >
                    Clear cache
                  </button>
                  <button
                    type="button"
                    className={clsx(
                      "rounded-full border px-4 py-2 text-sm font-semibold",
                      theme === "light"
                        ? "border-slate-300 text-slate-700"
                        : "border-slate-700 text-slate-300",
                    )}
                  >
                    Upgrade plan
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
