import React from "react";
import clsx from "clsx";
import { Navigate, useParams } from "react-router";
import { useSearchParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import useTheme from "../hooks/useTheme";

export default function Profile() {
  const { profileID } = useParams();
  const [searchParams] = useSearchParams();
  const { isAuthenticated, user } = useAuth();
  const { theme } = useTheme();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main
      className={clsx(
        "flex-1 p-8 transition-colors duration-300",
        theme === "light"
          ? "bg-gray-100 text-slate-950"
          : "bg-slate-900 text-white",
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-4xl rounded-4xl border p-8 shadow-xl",
          theme === "light"
            ? "border-slate-200 bg-white shadow-slate-200"
            : "border-slate-800 bg-slate-800 shadow-slate-950",
        )}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div
              className={clsx(
                "flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold",
                theme === "light"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-blue-900 text-blue-100",
              )}
            >
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {user?.name || "User Profile"}
              </h2>
              <p
                className={clsx(
                  "text-sm",
                  theme === "light" ? "text-slate-600" : "text-slate-300",
                )}
              >
                {user?.email || "No email available"}
              </p>
            </div>
          </div>

          <div
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium",
              theme === "light"
                ? "bg-slate-100 text-slate-700"
                : "bg-slate-700 text-slate-200",
            )}
          >
            Active Account
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div
            className={clsx(
              "rounded-2xl border p-4",
              theme === "light"
                ? "border-slate-200 bg-slate-50"
                : "border-slate-700 bg-slate-700/50",
            )}
          >
            <p className="text-sm font-semibold">Profile ID</p>
            <p className="mt-1 text-lg">{profileID ?? "guest"}</p>
          </div>
          <div
            className={clsx(
              "rounded-2xl border p-4",
              theme === "light"
                ? "border-slate-200 bg-slate-50"
                : "border-slate-700 bg-slate-700/50",
            )}
          >
            <p className="text-sm font-semibold">Current Mode</p>
            <p className="mt-1 text-lg">{searchParams.get("mode") ?? "none"}</p>
          </div>
        </div>

        <div
          className="mt-8 rounded-2xl border border-dashed p-6 text-sm"
          className={clsx(
            "mt-8 rounded-2xl border border-dashed p-6 text-sm",
            theme === "light"
              ? "border-slate-300 text-slate-600"
              : "border-slate-600 text-slate-300",
          )}
        >
          <p className="font-semibold">Welcome back!</p>
          <p className="mt-2">
            Your account is now active. You can continue browsing the app with
            your personalized profile information.
          </p>
        </div>
      </div>
    </main>
  );
}
