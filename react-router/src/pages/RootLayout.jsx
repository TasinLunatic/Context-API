import React from "react";
import clsx from "clsx";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import useTheme from "../hooks/useTheme";

export default function RootLayout() {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div
        className={clsx(
          "flex flex-1 transition-colors duration-300",
          theme === "light"
            ? "bg-slate-100 text-slate-950"
            : "bg-slate-950 text-slate-100",
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
