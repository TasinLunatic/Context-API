import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const settingsSections = [
  {
    title: "Personal Information",
    icon: "👤",
    description: "Update your name, email, phone, and bio.",
    fields: [
      { label: "Full Name", name: "fullName", type: "text" },
      { label: "Email", name: "email", type: "email" },
      { label: "Phone", name: "phone", type: "text" },
      {
        label: "Location",
        name: "location",
        type: "text",
        value: "Dhaka, Bangladesh",
      },
    ],
  },
  {
    title: "Privacy Settings",
    icon: "🔒",
    description: "Control who can see your activity and data.",
    options: [
      "Private account",
      "Show activity status",
      "Allow messages from anyone",
    ],
  },
  {
    title: "Notifications",
    icon: "🔔",
    description: "Choose how you want to receive updates.",
    options: ["Email updates", "Push notifications", "Weekly digest"],
  },
  {
    title: "Help & Support",
    icon: "❓",
    description: "Get answers and contact support quickly.",
    options: ["FAQ", "Contact support", "Report a problem"],
  },
  {
    title: "Manage Storage",
    icon: "💾",
    description: "Monitor your saved data and clear cache.",
    options: ["Free up space", "Clear cache", "Download backup"],
  },
];

export default function Settings() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    bio: "I love building apps with React and Context API.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main
      className={clsx(
        "flex-1 px-4 py-8 transition-colors duration-300",
        theme === "light"
          ? "bg-gray-100 text-slate-950"
          : "bg-slate-900 text-white",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p
            className={clsx(
              "mt-2 text-sm",
              theme === "light" ? "text-slate-600" : "text-slate-300",
            )}
          >
            Customize your experience with organized account controls.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {settingsSections.map((section) => (
            <section
              key={section.title}
              className={clsx(
                "rounded-2xl border p-6 shadow-sm",
                theme === "light"
                  ? "border-slate-200 bg-white"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                <div>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" ? "text-slate-600" : "text-slate-300",
                    )}
                  >
                    {section.description}
                  </p>
                </div>
              </div>

              {section.fields ? (
                <div className="grid gap-4">
                  {section.fields.map((field) => (
                    <div key={field.name}>
                      <label className="mb-2 block text-sm font-medium">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] ?? field.value ?? ""}
                        onChange={handleChange}
                        className={clsx(
                          "w-full rounded-lg border px-3 py-2 text-sm outline-none",
                          theme === "light"
                            ? "border-slate-300 bg-white text-slate-950"
                            : "border-slate-700 bg-slate-800 text-white",
                        )}
                      />
                    </div>
                  ))}
                  <textarea
                    name="bio"
                    rows="3"
                    value={formData.bio}
                    onChange={handleChange}
                    className={clsx(
                      "w-full rounded-lg border px-3 py-2 text-sm outline-none",
                      theme === "light"
                        ? "border-slate-300 bg-white text-slate-950"
                        : "border-slate-700 bg-slate-800 text-white",
                    )}
                    placeholder="Write your bio"
                  />
                </div>
              ) : (
                <ul className="space-y-2">
                  {section.options.map((option) => (
                    <li
                      key={option}
                      className={clsx(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm",
                        theme === "light"
                          ? "bg-slate-50 text-slate-700"
                          : "bg-slate-800 text-slate-200",
                      )}
                    >
                      <span>{option}</span>
                      <span className="text-xs">⚙️</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
