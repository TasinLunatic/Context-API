import clsx from "clsx";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useTheme from "../hooks/useTheme";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const activePath =
    location.pathname === "/" ? "/dashboard" : location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          activePage={activePath}
          onNavigate={(path) => navigate(path)}
        />
        <main
          className={clsx(
            "flex-1 p-6 md:p-8 transition-colors duration-300",
            theme === "light"
              ? "bg-slate-100 text-slate-900"
              : "bg-slate-950 text-slate-100",
          )}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
