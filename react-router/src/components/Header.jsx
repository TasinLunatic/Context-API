import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={clsx(
        "border-b-2 p-4 transition-colors duration-300",
        theme === "light"
          ? "border-slate-200 bg-white text-slate-950"
          : "border-slate-800 bg-slate-950 text-slate-100",
      )}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          <span>Welcome, Guest!</span>
          <button
            onClick={toggleTheme}
            className={clsx(
              "cursor-pointer rounded-lg px-4 py-2 font-medium",
              theme === "light"
                ? "bg-slate-900 text-white hover:bg-slate-700"
                : "bg-slate-100 text-slate-950 hover:bg-slate-200",
            )}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
