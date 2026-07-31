import clsx from "clsx";
import { useContext } from "react";
import useTheme from "../hooks/useTheme";

function MenuItems({ item, theme }) {
  return (
    <li>
      <button
        className={clsx(
          "w-full text-left p-2 rounded hover:bg-opacity-80 transition-colors ",
          theme === "light" && "hover:bg-gray-200",
          theme === "dark" && "hover:bg-gray-900",
        )}
      >
        {item}
      </button>
    </li>
  );
}

export default function Sidebar() {
  const { theme } = useTheme();

  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];
  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-300 border-r-2",
        theme === "light" && "bg-slate-200 border-slate-200 text-slate-800",
            theme === "dark" && "bg-slate-900 border-slate-600 text-slate-200"
      )}
    >
      <nav className="">
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItems key={item} item={item} theme={theme} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
