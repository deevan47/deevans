import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiCode,
  FiServer,
  FiAward,
  FiBriefcase,
  FiBookOpen,
  FiYoutube,
  FiInstagram,
  FiX,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiC,
  SiAdobepremierepro,
  SiCplusplus,
  SiPython,
  SiUnity,
} from "react-icons/si";
import ProfileImage from "../assets/aws-logo.png";
import Certificate1 from "../assets/cert1.pdf";
import Certificate2 from "../assets/cert2.pdf";
import basketball from "../assets/basketball.mp4";
import spray from "../assets/background.mp4";
import pp from "../assets/cert/Adobe Premiere Pro.jpg";
import sw from "../assets/cert/Career Essentials in Software Development .jpg";


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const [selectedCert, setSelectedCert] = useState(null);

  // ESC key handler for certificate modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        // ESC key
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Section refs for scroll detection
  const sections = {
    profile: useRef(null),
    skills: useRef(null),
    certificates: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
  };

  // Animation variants (consistent format)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Sample data
  const skills = [
    { name: "React/Next.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-orange-500" /> },
  { name: "C", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Unity", icon: <SiUnity className="text-gray-700" /> },
  { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-pink-500" /> },
  ];

  const experience = [
    {
      role: "Web Developement Intern",
      company: "Noel Ventures",
      duration: "May 2024 - July 2024 ",
      points: [
        "Desigining Web Pages",
        "Video Editing and Poster Designing for Marketing",
        "UI/UX for Web Pages by coordinating with Design Team",
      ],
    },
    {
      role: "Mission India",
      company: "Community Development",
      duration: "May 2023 - August 2023",
      points: [
        "Participate in Community Development Activities",
        "Children Camps",
        "Poster Designing, Video Editing",
      ],
    },
  ];

  const certificates = [
    {
      title: "Adobe Premiere Pro",
      issuer: "LinkedIn",
      image: pp,
    },
    { title: "Software Development", issuer: "Microsoft and LinkedIn", image: sw },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Purple overlay with 50% opacity */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-400/50 to-blue-400/50 mix-blend-multiply pointer-events-none z-0" />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      {/* Profile Section */}
      <motion.section
        ref={sections.profile}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 px-6 relative z-10"
      >
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deevankumar Gaddala
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">

            </p>

            {/* Education */}
            <motion.div
              className="mt-4 flex items-center gap-3 justify-center md:justify-start"
              variants={itemVariants}
            >
              <FiBookOpen className="text-purple-500" />
              <p className="text-gray-600 dark:text-gray-400">
                Major: Computer Science - Minor: Business Analytics
                <br />
                Flame University (2022 - Present)
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap"
              variants={containerVariants}
            >
              {[
                {
                  icon: <FiGithub />,
                  label: "GitHub",
                  color: "bg-gray-800",
                  textHover: "hover:text-gray-300",
                  link: "https://github.com/deevan47",
                },
                {
                  icon: <FiLinkedin />,
                  label: "LinkedIn",
                  color: "bg-blue-600",
                  textHover: "hover:text-blue-300",
                  link: "https://www.linkedin.com/in/deevankumar-gaddala/",
                },
                {
                  icon: <FiYoutube />,
                  label: "YouTube",
                  color: "bg-red-600",
                  textHover: "hover:text-red-300",
                  link: "https://youtube.com/@simplydeevan",
                },
                {
                  icon: <FiInstagram />,
                  label: "Instagram",
                  color: "bg-pink-600",
                  textHover: "hover:text-pink-300",
                  link: "https://wwwinstagram.com/simplydeevan",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  className={`flex items-center px-6 py-3 ${social.color} text-white rounded-full transition-transform`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {social.icon}
                  <span
                    className={`ml-2 transition-colors ${social.textHover}`}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={sections.skills}
        className="py-20 px-6 bg-gray dark:bg-gray-800/50 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-8 bg-white/50 dark:bg-gray-700/50 rounded-2xl shadow-lg backdrop-blur-sm"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={sections.experience}
        className="py-20 px-6 bg-gray dark:bg-gray-800/50 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="pl-8 border-l-4 border-purple-500 relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-purple-500" />
                <div className="p-6 bg-white/50 dark:bg-gray-700/50 rounded-xl shadow-md backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-purple-500 mr-2">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        ref={sections.certificates}
        className="py-20 px-6 bg-gray dark:bg-gray-800/50 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="cursor-pointer group"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl font-semibold">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg shadow-2xl w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 -right-8 p-2 text-white hover:text-gray-200 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
  {/* Container for the two videos */}
  <div className="flex w-full h-full justify-center items-center gap-4">
    {/* First Video */}
    <div
      className="relative"
      style={{
        aspectRatio: "9/16",
        maxWidth: "calc(100vh * (9/16))", // Further increase the width
        maxHeight: "calc(100vh * (16/9))", // Adjust the max height accordingly
        width: "auto",
        height: "100%",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-contain"
        src={basketball}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

    {/* Second Video */}
    <div
      className="relative"
      style={{
        aspectRatio: "9/16",
        maxWidth: "calc(100vh * (9/16))", // Same width adjustment for second video
        maxHeight: "calc(100vh * (16/9))",
        width: "auto",
        height: "100%",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-contain"
        src={spray}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  </div>
</div>


    </div>
  );
};

export default Home;
