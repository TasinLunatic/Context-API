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

function LoginButton({ theme }) {
  const navigate = useNavigate();

  return (
    <li>
      <button
        onClick={() => navigate("/login")}
        className={clsx(
          "w-full text-left p-2 rounded transition-colors flex items-center gap-2",
          theme === "light" && "hover:bg-gray-200 text-gray-800",
          theme === "dark" && "hover:bg-gray-900 text-gray-100",
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
        "w-64 p-4 transition-colors duration-300 flex flex-col",
        theme === "light" && " bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-800 text-gray-100",
      )}
    >
      <nav className="flex-1">
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItems key={item} item={item} theme={theme} />
          ))}
        </ul>
      </nav>

      <div className="mt-4 border-t pt-4">
        <ul className="space-y-2">
          <LoginButton theme={theme} />
        </ul>
      </div>
    </aside>
  );
}
