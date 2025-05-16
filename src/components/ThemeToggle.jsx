import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
    >
      {/* Toggle circle */}
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      />

      {/* Icons */}
      <span className="absolute left-1 text-yellow-500 text-lg">
        
      </span>
      <span className="absolute right-1 text-indigo-300 text-lg">
        
      </span>
    </button>
  );
};

export default ThemeToggle;
