import { motion } from "framer-motion";
import { FaHome, FaFrown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
    >
      <div className="text-center max-w-2xl">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8 inline-block"
        >
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 dark:from-red-400 dark:to-purple-400">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="mb-8"
        >
          <FaFrown className="text-6xl text-gray-600 dark:text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Page Lost in Space
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            The page you're looking for seems to have drifted out of orbit...
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-200 rounded-full opacity-50 animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-red-200 rounded-full opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-blue-200 rounded-full opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    </motion.div>
  );
}