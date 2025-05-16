import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiCode, FiServer, FiYoutube, FiInstagram, FiAward, FiBriefcase, FiBookOpen, FiX } from 'react-icons/fi';
import ProfileImage from '../assets/profile.jpg';
import Certificate1 from '../assets/cert1.jpg';
import Certificate2 from '../assets/cert2.jpg';

export default function Home() {
  const [selectedCert, setSelectedCert] = useState(null);

  const projects = [
    {
      title: "VR - Acrophobia Management",
      tech: ["Unity", "Sketchfab", "C#"],
      description: "Virtual reality application designed to help users manage fear of heights through immersive therapy experiences",
      link: "https://github.com/deevan7/vr3"
    },
    {
      title: "YouTube Trending Analysis",
      tech: ["C++", "Algorithms", "Data Structures"],
      description: "Analysis system for predicting trending videos using advanced sorting algorithms",
      link: "https://github.com/deevan7/Youtube-Analysis"
    }
  ];

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: Certificate1
    },
    {
      title: "Google UX Design Professional",
      issuer: "Coursera",
      image: Certificate2
    }
  ];

  const experience = [
    {
      role: "Full-Stack Developer Intern",
      company: "Tech Innovators Inc.",
      duration: "Jun 2023 - Present",
      points: [
        "Developed and maintained company's core web application",
        "Implemented CI/CD pipeline reducing deployment time by 40%",
        "Led migration from REST to GraphQL APIs"
      ]
    },
    {
      role: "AI Research Assistant",
      company: "University Lab",
      duration: "Jan 2023 - May 2023",
      points: [
        "Developed ML models for image recognition tasks",
        "Published paper on neural network optimizations",
        "Presented findings at international conference"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: ["10%", "-10%", "10%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-8xl mx-auto px-6 py-20">
        <div className="relative z-10 space-y-20">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-10 shadow-3xl border border-gray-100/60 dark:border-gray-700/50"
          >
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <motion.div 
                whileHover={{ rotate: 0 }}
                className="relative flex-shrink-0"
              >
                <img 
                  src={ProfileImage} 
                  alt="Deevankumar Gaddala"
                  className="w-40 h-40 rounded-full border-1 border-white dark:border-gray-800 shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-lg">
                  <FiCode className="text-white w-7 h-7" />
                </div>
              </motion.div>

              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deevankumar Gaddala
                </h1>
                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-5">
                  <FiBookOpen className="text-purple-500 w-7 h-7" />
                  <p className="text-2xl text-gray-600 dark:text-gray-300">
                    B.Tech Computer Science<br/>
                    SRM University, Chennai (2021-2025)
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-5">
                  <SocialLink 
                    icon={<FiGithub className="w-6 h-6" />} 
                    label="GitHub" 
                    color="gray" 
                    link="https://github.com/deevan7" 
                  />
                  <SocialLink 
                    icon={<FiLinkedin className="w-6 h-6" />} 
                    label="LinkedIn" 
                    color="blue" 
                    link="https://linkedin.com/in/deevankumar-gaddala" 
                  />
                  <SocialLink 
                    icon={<FiYoutube className="w-6 h-6" />} 
                    label="YouTube" 
                    color="red" 
                    link="https://youtube.com/@simplydeevan" 
                  />
                  <SocialLink 
                    icon={<FiInstagram className="w-6 h-6" />} 
                    label="Instagram" 
                    color="pink" 
                    link="https://instagram.com/simplydeevan" 
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-10 shadow-3xl border border-gray-100/60 dark:border-gray-700/50"
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <FiAward className="text-purple-500 w-9 h-9" />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-3xl border-2 border-gray-200/80 dark:border-gray-700/70 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <motion.img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-gray-300 mt-2">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-10 shadow-3xl border border-gray-100/60 dark:border-gray-700/50"
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <FiBriefcase className="text-blue-500 w-9 h-9" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="pl-8 border-l-4 border-purple-500"
                >
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">{exp.company} • {exp.duration}</p>
                  <ul className="mt-6 space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-lg text-gray-600 dark:text-gray-300">
                        <span className="text-purple-500 mr-3">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-10 shadow-3xl border border-gray-100/60 dark:border-gray-700/50"
          >
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <FiCode className="text-blue-500 w-9 h-9" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl flex items-center justify-center p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="rounded-2xl shadow-3xl object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 -right-12 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-lg transition-colors"
              >
                <FiX className="w-8 h-8 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const SocialLink = ({ icon, label, color, link }) => {
  const colorClasses = {
    gray: 'bg-gray-800 hover:bg-gray-700',
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
    pink: 'bg-pink-600 hover:bg-pink-500'
  };

  return (
    <motion.a 
      whileHover={{ y: -3 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-5 py-2.5 rounded-full text-white space-x-3 transition-colors ${colorClasses[color]} shadow-md hover:shadow-lg`}
    >
      {icon}
      <span className="text-lg font-medium">{label}</span>
    </motion.a>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200/70 dark:border-gray-700/60"
  >
    <div className="flex items-center gap-5 mb-6">
      <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
        {index % 2 === 0 ? (
          <FiCode className="w-7 h-7 text-blue-500" />
        ) : (
          <FiServer className="w-7 h-7 text-purple-500" />
        )}
      </div>
      <h3 className="text-2xl font-semibold">{project.title}</h3>
    </div>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
    <div className="flex flex-wrap gap-3 mb-6">
      {project.tech.map((tech) => (
        <span 
          key={tech} 
          className="px-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded-full font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
    <a 
      href={project.link} 
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-purple-400 dark:hover:text-purple-300 text-lg font-medium"
    >
      View Project
      <FiCode className="ml-3 w-5 h-5" />
    </a>
  </motion.div>
);