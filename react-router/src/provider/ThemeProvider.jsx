import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [searchParams , setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({...searchParams, mode: theme});
  }, [setSearchState,theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => ( prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
