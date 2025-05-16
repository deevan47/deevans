import { motion } from "framer-motion";
import { FaRegBuilding, FaRegCalendarAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";

export default function Experience() {
  const experiences = [
    { 
      company: "Mission India",
      role: "Community Development",
      period: "May 2023 - July 2023",
      achievements: [
        "Led migration to Next.js, improving SEO by 40%",
        "Implemented design system used by 15+ teams",
        "Mentored 5 junior developers"
      ],
      tech: ["Canva", "Priemere Pro"],
    },
    { 
      company: "Noel Ventures",
      role: "Web Development Intern",
      period: "May 2024 – July 2024",
      achievements: [
        "Built core dashboard features using React",
        "Improved page load speed by 30%",
        "Implemented CI/CD pipeline"
      ],
      tech: ["WordPress", "Canva", "Photoshop", "HTML", 'CSS', "Java Script"],
    },
    { 
      company: "Regrob",
      role: "Photography",
      period: "July 2024 – August 2024",
      achievements: [
        "Built core dashboard features using React",
        "Improved page load speed by 30%",
        "Implemented CI/CD pipeline"
      ],
      tech: ["Wondershare Filmora"],
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-300/40 to-blue-300/40 dark:from-purple-800/30 dark:to-blue-800/30 mix-blend-multiply pointer-events-none z-0" />

      {/* Content container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-20">
          <motion.h1 
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Professional Journey
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Milestones and achievements throughout my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pl-24" : "md:pr-24"}`}
            >
              <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 -ml-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>

                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FaRegBuilding className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.role}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                    <FaRegCalendarAlt />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 mr-2">▹</span>
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full flex items-center"
                      >
                        {tech === "React" && <SiReact className="mr-2" />}
                        {tech === "Next.js" && <SiNextdotjs className="mr-2" />}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="/resume"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            View Full Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
