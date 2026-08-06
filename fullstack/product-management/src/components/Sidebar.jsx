import clsx from "clsx";
import useTheme from "../hooks/useTheme";

function MenuItems({ item, theme, isActive, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          "w-full rounded-lg border px-3 py-2 text-left font-medium transition-all duration-200",
          theme === "light"
            ? "border-transparent text-slate-700 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            : "border-transparent text-slate-200 hover:border-violet-700 hover:bg-violet-950/60 hover:text-violet-200",
          isActive &&
            (theme === "light"
              ? "border-violet-300 bg-violet-100 text-violet-800 shadow-sm"
              : "border-violet-700 bg-violet-950/70 text-violet-200 shadow-sm"),
        )}
      >
        {item}
      </button>
    </li>
  );
}

export default function Sidebar({ activePage, onNavigate }) {
  const { theme } = useTheme();
  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];

  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-300 border-r-2",
        theme === "light" && "bg-slate-200 border-slate-200 text-slate-800",
        theme === "dark" && "bg-slate-900 border-slate-600 text-slate-200",
      )}
    >
      <nav>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItems
              key={item}
              item={item}
              theme={theme}
              isActive={activePage === item}
              onClick={() => onNavigate(item)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
