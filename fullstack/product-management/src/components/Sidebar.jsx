import clsx from "clsx";
import useTheme from "../hooks/useTheme";

function MenuItems({ item, theme, isActive, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          "w-full text-left p-2 rounded transition-colors duration-200",
          theme === "light" && "hover:bg-gray-200",
          theme === "dark" && "hover:bg-gray-900",
          isActive &&
            (theme === "light"
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white"),
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
