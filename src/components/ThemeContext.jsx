import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Default theme: system-based preference or saved in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [themeSelected, setThemeSelectedState] = useState(
    localStorage.getItem("themeSelected") === "true"
  );

  // Global persistent split slider position
  const [sliderPos, setSliderPosState] = useState(() => {
    const saved = localStorage.getItem("sliderPos");
    return saved !== null ? parseFloat(saved) : 50;
  });

  const setSliderPos = (pos) => {
    setSliderPosState(pos);
    localStorage.setItem("sliderPos", String(pos));
  };

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

  const setThemeSelected = (selected) => {
    setThemeSelectedState(selected);
    localStorage.setItem("themeSelected", String(selected));
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const resetSlider = () => {
    setSliderPos(50);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        toggleTheme,
        themeSelected,
        setThemeSelected,
        sliderPos,
        setSliderPos,
        resetSlider,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
