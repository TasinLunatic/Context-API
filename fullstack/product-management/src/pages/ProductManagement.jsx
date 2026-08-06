import clsx from "clsx";
import useTheme from "../hooks/useTheme";

const products = [
  { name: "Laptop", stock: 12 },
  { name: "Headphones", stock: 8 },
  { name: "Phone", stock: 5 },
];

export default function ProductManagement() {
  const { theme } = useTheme();

  return (
    <section className="space-y-4">
      <div
        className={clsx(
          "rounded-xl border p-6 shadow-sm transition-colors duration-300",
          theme === "light"
            ? "border-slate-200 bg-white text-slate-800"
            : "border-slate-700 bg-slate-800 text-slate-100",
        )}
      >
        <p
          className={clsx(
            "mb-2 text-sm font-semibold uppercase tracking-wide",
            theme === "light" ? "text-violet-600" : "text-emerald-400",
          )}
        >
          Products
        </p>
        <h2 className="text-2xl font-semibold">Product management</h2>
        <p className="mt-2 text-sm opacity-80">
          This page now shows product details instead of falling back to the
          dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className={clsx(
              "rounded-xl border p-4 shadow-sm transition-colors duration-300",
              theme === "light"
                ? "border-slate-200 bg-gradient-to-br from-violet-50 to-white"
                : "border-slate-700 bg-gradient-to-br from-violet-950/70 to-slate-900",
            )}
          >
            <p className="text-sm opacity-70">Product</p>
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="mt-1 text-sm opacity-80">In stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
