import { useEffect, useState, useRef } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

function getInitialTheme(searchParams) {
  try {
    const stored = localStorage.getItem("nexus-theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage unavailable
  }
  const mode = searchParams.get("mode");
  if (mode === "dark" || mode === "light") return mode;
  return "light";
}

const ThemeProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme, setTheme] = useState(() => getInitialTheme(searchParams));
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("nexus-theme", theme);
    } catch {
      // localStorage unavailable
    }
    const currentMode = searchParamsRef.current.get("mode");
    if (currentMode !== theme) {
      const next = new URLSearchParams(searchParamsRef.current);
      next.set("mode", theme);
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
