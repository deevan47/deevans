// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
import { ThemeProvider, useTheme } from "./components/ThemeContext";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppContent() {
  const { themeSelected, setThemeSelected, theme, changeTheme, sliderPos, setSliderPos, resetSlider } = useTheme();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);

  const isHome = location.pathname === "/";

  // Sync state to refs for global mount-registered listeners
  const isDraggingRef = useRef(false);
  isDraggingRef.current = isDragging;

  const sliderPosRef = useRef(50);
  sliderPosRef.current = sliderPos;

  // Bind high-performance global pointer tracking on mount (runs exactly once)
  useEffect(() => {
    const triggerSelection = (mode, currentPos) => {
      setIsDragging(false);
      const targetPos = mode === "light" ? 0 : 100;
      
      let current = currentPos;
      const distance = targetPos - current;
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        const nextPos = current + (distance * (step / 15));
        setSliderPos(nextPos);
        if (step >= 15) {
          setSliderPos(targetPos);
          clearInterval(interval);
          
          setTimeout(() => {
            changeTheme(mode);
            setThemeSelected(true); // Selection complete, hide split-screen onboarding
          }, 150);
        }
      }, 16);
    };

    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (clientX / rect.width) * 100));
        
        // 10% snap lock trigger (Drag 10% away from the center 50% split):
        // Move 10% left -> sliderPos <= 45% -> snap to full Light Mode (0%)
        if (percentage <= 45) {
          triggerSelection("light", percentage);
          return;
        }

        // Move 10% right -> sliderPos >= 55% -> snap to full Dark Mode (100%)
        if (percentage >= 55) {
          triggerSelection("dark", percentage);
          return;
        }

        setSliderPos(percentage);
      }
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [changeTheme, setSliderPos, setThemeSelected]);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
  };

  const showSplit = !themeSelected;

  if (!showSplit) {
    return (
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
    );
  }

  // Persistent Double-Rendered Layout: Split applies to ALL pages and routes!
  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden select-none"
    >
      {/* 1. BOTTOM LAYER: Dark Mode actual website layout (Scrollable & fully interactive Master) */}
      <div className="dark bg-gray-950 text-white w-full min-h-screen relative">
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

      {/* 2. TOP LAYER: Light Mode actual website layout, absolutely aligned and clipped from the left */}
      <div 
        className="light bg-slate-50 text-slate-900 w-full h-full absolute top-0 left-0 z-10 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="w-full h-full min-h-screen bg-slate-50 text-slate-900">
          <Navbar />
          <div className="flex-1">
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
      </div>

      {/* 3. CENTRAL GLOWING DIVIDER LINE & HANDLE (Generous touch target) */}
      <div 
        className="fixed top-0 bottom-0 w-8 z-20 cursor-ew-resize pointer-events-auto -ml-4 flex justify-center touch-none"
        style={{ left: `${sliderPos}%` }}
        onPointerDown={handlePointerDown}
      >
        {/* Glowing Split Line */}
        <div className="w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 relative pointer-events-none">
          <div className="absolute inset-0 bg-purple-500 blur-[2px]" />
        </div>
        
        {/* Draggable glowing Circle Handle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center transition-transform pointer-events-none z-30"
          style={{ transform: `translate(-50%, -50%) scale(${isDragging ? 1.15 : 1})` }}
        >
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 select-none">
            ↔
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
