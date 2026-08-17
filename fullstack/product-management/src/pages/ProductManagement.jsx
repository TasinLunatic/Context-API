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
                    "rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border-t-4 border-violet-500",
                    theme === "light" && "bg-white text-gray-800",
                    theme === "dark" &&
                      "bg-gray-800 text-white shadow-gray-900 hover:shadow-gray-700",
                  )}
                >
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p
                    className={clsx(
                      "font-bold text-xl",
                      theme === "light" && "text-violet-600",
                      theme === "dark" && "text-violet-400",
                    )}
                  >
                    ${product.price?.toFixed(2)}
                  </p>
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
            "rounded-lg shadow-lg p-8 text-center transition-colors duration-300",
            theme === "light" &&
              "bg-gradient-to-r from-violet-600 to-purple-600 text-white",
            theme === "dark" &&
              "bg-gradient-to-r from-violet-700 to-purple-800 text-white",
          )}
        >
          <p className="text-sm font-semibold uppercase tracking-wide mb-2">
            Total Inventory Value
          </p>
          <p className="text-5xl font-bold">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
