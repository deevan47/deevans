import { motion } from "framer-motion";
import { FiGithub, FiCode } from "react-icons/fi";
import { SiNextdotjs, SiStripe } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Projects() {
  const projects = [
    { 
      name: 'Acrophobia Management - VR', 
      description: 'Immersive VR exposure therapy solution for acrophobia using Unity and C#.',
      tech: ['Unity', 'Sketchfab', 'C#'],
      github: 'https://github.com/deevan47/vr3',
      demo: 'https://drive.google.com/file/d/1S-U7djU-vXmQ_6RR25EMwPF2q06vS4AN/view?usp=drive_link',
      icon: <SiStripe className="w-6 h-6 text-purple-500" />
    },
    { 
      name: 'Google Play Store App Analysis Dashboard', 
      description: 'Interactive PowerBI dashboard analyzing Play Store data using Kaggle dataset.',
      tech: ['PowerBI', 'Kaggle'],
      github: 'https://github.com/deevan47/PlayStore-Analysis',
      demo: 'https://bloggen.dummy.com',
      icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />
    },
    { 
      name: 'Fla-sh Shell (Flame Shell)', 
      description: 'Custom-built Linux shell in C with process control and piping support.',
      tech: ['C', 'Linux Shell', 'Process Management'],
      github: 'https://github.com/deevan47/Terminal',
      demo: 'https://fitness.dummy.com',
      icon: <FaReact className="w-6 h-6 text-blue-500" />
    }
  ];

  const openInNewTab = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-300/40 to-blue-300/40 dark:from-purple-800/30 dark:to-blue-800/30 mix-blend-multiply pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* Header */}
        <motion.div whileHover={{ scale: 1.02 }} className="prose dark:prose-invert max-w-3xl mx-auto mb-20 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Practical implementations of my work showcasing Academic and Non-Academic Projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Header with Icon */}
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold">{project.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openInNewTab(project.github)}
                  className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-300 transition-all"
                >
                  <FiGithub className="mr-2" />
                  View Source Code
                </motion.button>
              </div>

              {/* Demo Button */}
              {project.demo && (
                <div className="mt-4">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openInNewTab(project.demo)}
                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-gray-600 dark:text-gray-300 transition-all"
                  >
                    View Demo
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Buttons */}
        <motion.div whileHover={{ scale: 1.05 }} className="mt-20 text-center">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => openInNewTab('https://github.com/deevan47')}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <FiCode className="mr-2" />
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
