import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const cards = [
  { title: "Orders", value: "24" },
  { title: "Revenue", value: "$3.2k" },
  { title: "Visitors", value: "1.2k" },
];

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <div
        className={clsx(
          "rounded-xl border p-6 shadow-sm",
          theme === "light"
            ? "border-slate-200 bg-white text-slate-800"
            : "border-slate-700 bg-slate-800 text-slate-100",
        )}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-500">
          Overview
        </p>
        <h2 className="text-2xl font-semibold">
          Welcome back to your dashboard
        </h2>
        <p className="mt-2 text-sm opacity-80">
          Here is a simple summary of your current activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={clsx(
              "rounded-xl border p-4 shadow-sm",
              theme === "light"
                ? "border-slate-200 bg-slate-50"
                : "border-slate-700 bg-slate-900",
            )}
          >
            <p className="text-sm opacity-70">{card.title}</p>
            <p className="mt-2 text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
