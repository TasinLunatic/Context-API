import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router";

function MenuItems({ item, theme }) {
  const navigate = useNavigate();

  return (
    <li>
      <button
        onClick={() => navigate(`/${item.toLowerCase()}`)}
        className={clsx(
          "w-full rounded p-2 text-left transition-colors",
          theme === "light"
            ? "text-slate-800 hover:bg-slate-200"
            : "text-slate-100 hover:bg-slate-800",
        )}
      >
        {item}
      </button>
    </li>
  );
}

function LoginButton({ theme }) {
  const navigate = useNavigate();

  return (
    <li>
      <button
        onClick={() => navigate("/login")}
        className={clsx(
          "flex w-full items-center gap-2 rounded p-2 text-left transition-colors",
          theme === "light"
            ? "text-slate-800 hover:bg-slate-200"
            : "text-slate-100 hover:bg-slate-800",
        )}
      >
        <span>🔐</span>
        <span>Login</span>
      </button>
    </li>
  );
}

export default function Sidebar() {
  const { theme } = useTheme();
  const menuItems = ["Dashboard", "Profile", "About", "Settings", "Help"];

  return (
    <aside
      className={clsx(
        "flex w-64 flex-col border-r p-4 transition-colors duration-300",
        theme === "light"
          ? "border-slate-200 bg-slate-100 text-slate-950"
          : "border-slate-800 bg-slate-950 text-slate-100",
      )}
    >
      <nav className="flex-1">
        <h2 className="mb-2 text-lg font-semibold">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItems key={item} item={item} theme={theme} />
          ))}
        </ul>
      </nav>

      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
        <ul className="space-y-2">
          <LoginButton theme={theme} />
        </ul>
      </div>
    </aside>
  );
}
