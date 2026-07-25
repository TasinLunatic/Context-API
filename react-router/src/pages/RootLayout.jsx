import React from "react";
import clsx from "clsx";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import useTheme from "../hooks/useTheme";

export default function RootLayout() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className={clsx(
          "flex flex-1 transition-colors duration-300",
          theme === "light"
            ? "bg-gray-100 text-slate-950"
            : "bg-slate-900 text-white",
        )}
      >
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
