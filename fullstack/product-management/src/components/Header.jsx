import clsx from "clsx";
import { useNavigate } from "react-router";
import useTheme from "../hooks/useTheme";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      className={clsx(
        "p-4 border-b-2 transition-colors duration-300",
        theme === "light" && "bg-slate-200 border-slate-200 text-slate-800",
        theme === "dark" && "bg-slate-900 border-slate-600 text-slate-200",
      )}
    >
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          <span className="">Welcome, Guest!</span>
          <button
            onClick={toggleTheme}
            className={clsx(
              "px-4 py-2 rounded-lg font-medium cursor-pointer",
              theme === "light" && "bg-gray-800 text-white hover:bg-gray-700",
              theme === "dark" && "bg-white text-gray-800 hover:bg-gray-100",
            )}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button
            type="button"
            onClick={handleLogout}
            aria-label="Log out"
            title="Log out"
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-lg text-xl font-semibold cursor-pointer transition-colors duration-300",
              theme === "light" && "bg-red-100 text-red-700 hover:bg-red-200",
              theme === "dark" && "bg-red-950 text-red-300 hover:bg-red-900",
            )}
          >
            ↪
          </button>
        </div>
      </div>
    </header>
  );
}
