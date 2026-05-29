import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Default theme: system-based preference or saved in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [themeSelected, setThemeSelectedState] = useState(false); // Reset to false on every fresh reload

  // Global persistent split slider position
  const [sliderPos, setSliderPosState] = useState(50);

  const setSliderPos = (pos) => {
    setSliderPosState(pos);
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sync global document theme class with slider position
  useEffect(() => {
    if (sliderPos === 100) {
      // Locked fully to Dark Mode
      document.documentElement.classList.add("dark");
    } else if (sliderPos === 0) {
      // Locked fully to Light Mode
      document.documentElement.classList.remove("dark");
    } else {
      // Split-screen mode: Keep root html clean, so Tailwind's dark: variant 
      // only triggers inside the bottom layer's local .dark container wrapper!
      document.documentElement.classList.remove("dark");
    }
  }, [sliderPos]);

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
