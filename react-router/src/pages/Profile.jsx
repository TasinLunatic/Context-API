import React from "react";
import clsx from "clsx";
import { Navigate, useParams } from "react-router";
import { useSearchParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import useTheme from "../hooks/useTheme";

export default function Profile() {
  const { profileID } = useParams();
  const [searchParams] = useSearchParams();
  const { isAuthenticated } = useAuth();
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
          "mx-auto max-w-3xl rounded-2xl border p-8 shadow-sm",
          theme === "light"
            ? "border-slate-200 bg-white"
            : "border-slate-800 bg-slate-800",
        )}
      >
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="mt-4">{`Profile ID: ${profileID ?? "guest"}`}</p>
        <p className="mt-2">{`Search Params: ${searchParams.get("mode") ?? "none"}`}</p>
      </div>
    </main>
  );
}
