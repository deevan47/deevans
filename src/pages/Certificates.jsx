import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import pp from "../assets/cert/Adobe Premiere Pro.jpg";
import ai from "../assets/cert/Building AI Literacy.jpg";
import sw from "../assets/cert/Career Essentials in Software Development .jpg";
import f from "../assets/cert/Figma Basics.jpg";
import ps from "../assets/cert/Learning Photoshop.jpg";

export default function Certificates() {
  const allCertificates = [
    { title: "Adobe Premiere Pro", image: pp },
    { title: "Building AI Literacy", image: ai },
    { title: "Software Development", image: sw },
    { title: "Figma Basics", image: f },
    { title: "Learning Photoshop", image: ps },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const displayedCertificates = showAll ? allCertificates : allCertificates.slice(0, 4);

  return (
    <div className="min-h-screen relative">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-300/40 to-blue-300/40 dark:from-purple-800/30 dark:to-blue-800/30 mix-blend-multiply pointer-events-none z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            My Certificates
          </h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedCertificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group"
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-60 object-cover rounded-xl shadow-md border border-gray-300 dark:border-gray-700"
              />
              <p className="mt-3 text-center text-lg font-medium text-gray-800 dark:text-gray-200">
                {cert.title}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-2xl max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-3xl text-red-600 hover:text-red-500"
              >
                <IoClose />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl text-center font-semibold text-gray-800 dark:text-gray-100">
                {selectedCert.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
