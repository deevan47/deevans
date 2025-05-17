// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeContext";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />

        <div className="flex-1">
          <ScrollToTop />
          <main className="max-w-7xl w-full mx-auto px-4 md:px-8 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
