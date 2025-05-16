import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    "Home",
    "About",
    "Projects",
    "Certificates",
    "Experience",
    "Resume",
    "Contact",
  ];

  return (
<nav className="w-full bg-white/40 dark:bg-gray-900/50 backdrop-blur-md shadow-md px-6 py-4 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Deevankumar
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const path = `/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={link}
                to={path}
                className={`transition-colors text-sm font-medium ${
                  isActive
                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {link}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
