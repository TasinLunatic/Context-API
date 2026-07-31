import clsx from "clsx";
import { NavLink } from "react-router";
import { GridIcon, UserIcon, GearIcon, HelpIcon } from "./ui/icons";

const menuItems = [
  { label: "Dashboard", to: "/dashboard", icon: GridIcon },
  { label: "Profile", to: "/profile", icon: UserIcon },
  { label: "Settings", to: "/settings", icon: GearIcon },
  { label: "Help", to: "/help", icon: HelpIcon },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-[4.25rem] flex h-[calc(100vh-4.25rem)] w-64 flex-shrink-0 flex-col border-r border-edge p-4">
      <div className="glass-card flex flex-1 flex-col rounded-3xl p-4">
        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-ink-muted">
          Navigation
        </p>

        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/dashboard"}
              className={({ isActive }) =>
                clsx("nav-item", isActive && "nav-item-active")
              }
            >
              <item.icon className="h-4.5 w-4.5 flex-shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto pt-4">
          <div className="glass-card rounded-2xl p-3 text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Nexus v1.0
            </p>
            <p className="mt-1 text-[0.7rem] text-ink-muted">
              React • Router • Context
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
