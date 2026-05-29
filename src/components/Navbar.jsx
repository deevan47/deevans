import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { resetSlider, setThemeSelected } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

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
          
          <button
            onClick={() => {
              resetSlider();
              setThemeSelected(false);
              navigate("/");
            }}
            title="Reset Theme Slider"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200 flex items-center justify-center focus:outline-none"
            aria-label="Reset Theme Slider"
          >
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15v14c3.31 0 6-2.69 6-6s-2.69-6-6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
