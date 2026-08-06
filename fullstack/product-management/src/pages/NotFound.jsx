import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "rounded-2xl border p-10 text-center shadow-sm",
        theme === "light"
          ? "border-slate-200 bg-white text-slate-800"
          : "border-slate-700 bg-slate-800 text-slate-100",
      )}
    >
      <h2 className="text-3xl font-semibold">404</h2>
      <p className="mt-2 text-sm opacity-80">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
