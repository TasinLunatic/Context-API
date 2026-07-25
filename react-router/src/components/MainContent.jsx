import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      className={clsx(
        "flex-1 p-8 transition-colors duration-300",
        theme === "light"
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-950 text-slate-100",
      )}
    >
      <div className="max-w-2xl">
        <h2 className="mb-6 text-3xl font-bold">
          Welcome to My React Context API app
        </h2>
        <div
          className={clsx(
            "mb-6 rounded-xl border p-6",
            theme === "light"
              ? "border-slate-200 bg-white"
              : "border-slate-800 bg-slate-900",
          )}
        >
          <h3 className="mb-3 text-xl font-semibold">What you're seeing:</h3>
          <ul className="space-y-2">
            <li>
              • Current theme: <strong>{theme}</strong>
            </li>
            <li>
              • Current user: <strong>Guest</strong>
            </li>
            <li>
              • All components share the same state without prop drilling!
            </li>
            <li>• Toggle the theme button to see the entire app change</li>
          </ul>
        </div>

        <div
          className={clsx(
            "rounded-xl border p-6",
            theme === "light"
              ? "border-slate-200 bg-slate-50"
              : "border-slate-800 bg-slate-900",
          )}
        >
          <h3 className="mb-3 text-xl font-semibold">Update User Name:</h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Enter new name"
              className={clsx(
                "flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                theme === "light"
                  ? "border-slate-300 bg-white text-slate-950"
                  : "border-slate-700 bg-slate-800 text-slate-100",
              )}
            />
            <button
              onClick={() => {}}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
