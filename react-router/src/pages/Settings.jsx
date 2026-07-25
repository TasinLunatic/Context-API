import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Settings() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+880 1234 567890",
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
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-4xl rounded-4xl border p-8 shadow-xl",
          theme === "light"
            ? "border-slate-200 bg-white shadow-slate-200"
            : "border-slate-800 bg-slate-900 shadow-slate-950",
        )}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p
            className={clsx(
              "mt-2 text-sm",
              theme === "light" ? "text-slate-600" : "text-slate-300",
            )}
          >
            Manage your personal information and profile details.
          </p>
        </div>

        <form className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 outline-none",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950"
                    : "border-slate-700 bg-slate-800 text-slate-100",
                )}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 outline-none",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950"
                    : "border-slate-700 bg-slate-800 text-slate-100",
                )}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 outline-none",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950"
                    : "border-slate-700 bg-slate-800 text-slate-100",
                )}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                value="Dhaka, Bangladesh"
                className={clsx(
                  "w-full rounded-lg border px-4 py-2 outline-none",
                  theme === "light"
                    ? "border-slate-300 bg-white text-slate-950"
                    : "border-slate-700 bg-slate-800 text-slate-100",
                )}
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Bio</label>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              className={clsx(
                "w-full rounded-lg border px-4 py-2 outline-none",
                theme === "light"
                  ? "border-slate-300 bg-white text-slate-950"
                  : "border-slate-700 bg-slate-800 text-slate-100",
              )}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className={clsx(
                "rounded-lg px-4 py-2 font-medium",
                theme === "light"
                  ? "bg-slate-900 text-white hover:bg-slate-700"
                  : "bg-slate-100 text-slate-950 hover:bg-slate-200",
              )}
            >
              Save Changes
            </button>
            <button
              type="button"
              className={clsx(
                "rounded-lg border px-4 py-2 font-medium",
                theme === "light"
                  ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                  : "border-slate-700 text-slate-300 hover:bg-slate-800",
              )}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
