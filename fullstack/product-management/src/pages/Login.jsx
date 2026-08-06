import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Login() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex min-h-[60vh] items-center justify-center rounded-2xl border p-8 shadow-sm",
        theme === "light"
          ? "border-slate-200 bg-white text-slate-800"
          : "border-slate-700 bg-slate-800 text-slate-100",
      )}
    >
      <div className="w-full max-w-md space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-sm opacity-80">Please sign in to continue.</p>
        <button
          className={clsx(
            "rounded-lg px-4 py-2 font-medium",
            theme === "light"
              ? "bg-violet-600 text-white"
              : "bg-emerald-500 text-slate-900",
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
