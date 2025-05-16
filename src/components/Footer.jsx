// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deevankumar Gaddala</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building the future with code and creativity
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/deevankumar-gaddala/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/deevan47" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://www.youtube.com/@simplydeevan" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Youtube
            </a>
            <a href="https://www.instagram.com/simplydeevan/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-right text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Deevankumar Gaddala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}