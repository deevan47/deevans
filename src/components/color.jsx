export default function GradientLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-300/40 to-blue-300/40 dark:from-purple-800/30 dark:to-blue-800/30 mix-blend-multiply pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
