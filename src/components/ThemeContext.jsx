import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Default theme: system-based preference or saved in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
