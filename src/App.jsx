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
  const { theme, changeTheme, sliderPos, setSliderPos, resetSlider } = useTheme();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);

  // Sync state to refs for global mount-registered listeners
  const isDraggingRef = useRef(false);
  isDraggingRef.current = isDragging;

  const sliderPosRef = useRef(50);
  sliderPosRef.current = sliderPos;

  // Bind high-performance global pointer tracking on mount (runs exactly once)
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current) return;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (clientX / rect.width) * 100));
        
        // Edge locks: Pulling fully to either side snaps to 0% (Light) or 100% (Dark)
        let finalPercentage = percentage;
        if (percentage < 3) finalPercentage = 0;
        if (percentage > 97) finalPercentage = 100;

        setSliderPos(finalPercentage);

        // Notify context about dominance changes for general background adjustments
        if (finalPercentage < 35) {
          changeTheme("light");
        } else if (finalPercentage > 65) {
          changeTheme("dark");
        }
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
  }, [changeTheme, setSliderPos]);

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
  };

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
            {isDragging ? "⚡" : "↔"}
          </span>
        </div>
      </div>

      {/* 4. DYNAMIC HELP HUD */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
        <div className="bg-black/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-4 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Light</span>
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest font-bold font-mono">
            {hasInteracted ? "Slide to adjust layout split" : "Drag the center handle to split light/dark"}
          </div>
          <div className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold font-mono">
            {Math.round(sliderPos)}% Split
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Dark</span>
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          </div>
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
