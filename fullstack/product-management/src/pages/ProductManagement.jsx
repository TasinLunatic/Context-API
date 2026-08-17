import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { productService } from "../api/services";
import useTheme from "../hooks/useTheme";
import clsx from "clsx";

export default function ProductManagement() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const products = await productService.getProducts();
      setProducts(products);
    } catch (err) {
      console.log(err);
      alert("Error fetching data");
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const getProductByName = useCallback(
    (name) => {
      const product = products.find((product) =>
        new RegExp(name, "i").test(product.name),
      );
      return product ? product.name : "product not found";
    },
    [products],
  );

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);

  const getItemCount = (product) => {
    return product.items ?? product.quantity ?? product.stock ?? 0;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={clsx(
        "min-h-screen p-8 transition-colors duration-300",
        theme === "light" &&
          "bg-gradient-to-br from-violet-50 to-violet-100 text-gray-800",
        theme === "dark" &&
          "bg-gradient-to-br from-slate-900 to-slate-800 text-white",
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          className={clsx(
            "text-4xl font-bold mb-8 text-center",
            theme === "light" && "text-gray-800",
            theme === "dark" && "text-white",
          )}
        >
          Product Management
        </h1>

        {/* Search Section */}
        <div
          className={clsx(
            "rounded-lg shadow-md p-6 mb-8 transition-colors duration-300",
            theme === "light" &&
              "bg-white text-gray-700 border-l-4 border-violet-500",
            theme === "dark" &&
              "bg-gray-800 text-gray-200 border-l-4 border-violet-600",
          )}
        >
          <label
            className={clsx(
              "block text-sm font-semibold mb-3",
              theme === "light" && "text-gray-700",
              theme === "dark" && "text-gray-200",
            )}
          >
            Search Products
          </label>
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={handleSearch}
            className={clsx(
              "w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition",
              theme === "light" &&
                "border-gray-300 bg-white text-gray-800 focus:border-violet-500 focus:ring-violet-200",
              theme === "dark" &&
                "border-gray-600 bg-gray-700 text-white focus:border-violet-400 focus:ring-violet-400",
            )}
          />
          {search && (
            <div
              className={clsx(
                "mt-4 p-4 border-l-4 border-violet-500 rounded transition-colors duration-300",
                theme === "light" && "bg-violet-50 text-gray-700",
                theme === "dark" && "bg-violet-950/30 text-gray-200",
              )}
            >
              <p>
                <span className="font-semibold">Match:</span>{" "}
                <span
                  className={clsx(
                    "font-bold",
                    theme === "light" && "text-violet-600",
                    theme === "dark" && "text-violet-400",
                  )}
                >
                  {getProductByName(search)}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <h2
            className={clsx(
              "text-2xl font-bold mb-4",
              theme === "light" && "text-gray-800",
              theme === "dark" && "text-white",
            )}
          >
            Products
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className={clsx(
                    "rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-[3px] border-violet-500",
                    theme === "light" && "bg-white text-gray-800",
                    theme === "dark" &&
                      "bg-gray-800 text-white shadow-gray-900 hover:shadow-gray-700",
                  )}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex-1 pr-3 text-left">
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p
                        className={clsx(
                          "text-sm leading-relaxed",
                          theme === "light" && "text-gray-600",
                          theme === "dark" && "text-gray-300",
                        )}
                      >
                        {product.description ?? "No description available."}
                      </p>
                    </div>

                    <div className="flex min-w-[120px] flex-col items-end text-right">
                      <p
                        className={clsx(
                          "font-bold text-2xl leading-none",
                          theme === "light" && "text-violet-600",
                          theme === "dark" && "text-violet-400",
                        )}
                      >
                        ${product.price?.toFixed(2)}
                      </p>
                      <p
                        className={clsx(
                          "text-sm mt-2 font-medium",
                          theme === "light" && "text-gray-600",
                          theme === "dark" && "text-gray-300",
                        )}
                      >
                        {getItemCount(product)} items
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p
                className={clsx(
                  "text-lg",
                  theme === "light" && "text-gray-500",
                  theme === "dark" && "text-gray-400",
                )}
              >
                No products available
              </p>
            </div>
          )}
        </div>

        {/* Total Price Section */}
        <div
          className={clsx(
            "rounded-xl shadow-lg p-8 transition-colors duration-300 border-[4px] border-white/30",
            theme === "light" &&
              "bg-gradient-to-r from-violet-600 to-purple-600 text-white",
            theme === "dark" &&
              "bg-gradient-to-r from-violet-700 to-purple-800 text-white",
          )}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="text-left">
              <p className="text-2xl font-semibold tracking-wide">
                Total Inventory Value
              </p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold">${totalPrice.toFixed(2)}</p>
              <p className="text-sm mt-2 font-medium opacity-90">
                {products.reduce(
                  (acc, product) =>
                    acc +
                    (product.items ?? product.quantity ?? product.stock ?? 0),
                  0,
                )}{" "}
                items
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
