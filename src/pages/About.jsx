import { useState } from "react";
import { motion } from "framer-motion";
import ProfileImage from '../assets/profile.jpg'; 
import resume from "../assets/Deevankumar_Gaddala.pdf";

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
return (
  <div className="min-h-screen relative">
    {/* Fullscreen gradient background */}
    <div className="fixed inset-0 bg-gradient-to-br from-purple-400/50 to-blue-400/50 mix-blend-multiply pointer-events-none z-0" />

    {/* Content wrapper */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      
      {/* Flex container for image and text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-full md:w-1/3"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img 
              src={ProfileImage} 
              alt="Deevankumar Gaddala" 
              className="w-full h-auto object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-2/3 prose dark:prose-invert"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Hi, I'm Deevankumar Gaddala! I'm a Creative Content Creator, Video Editor, and Frontend Developer currently pursuing my B.Sc in Computer Science with a Minor in Business Analytics at Flame University, Pune. I combine my creative eye for visual aesthetics, pacing, and storytelling with a solid technical foundation in software engineering, machine learning, and interactive tools to build immersive digital experiences.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "Creative Video Editing & Storytelling",
              "Unity VR Environment & C# Logic",
              "React, TypeScript & Tailwind CSS",
              "UI/UX Design & Figma Prototyping",
              "Machine Learning & PyTorch Pipelines",
              "AI-Assisted Productivity Workflows"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2 text-blue-500">▹</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-8 text-indigo-600 dark:text-indigo-400">Key Projects</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
            <li>Developed **Acrophobic VR**, a five-level exposure therapy platform in Unity with a React/Tailwind frontend.</li>
            <li>Created **Machine Unlearning - ERASE**, a model pipeline using ResNet18 and PyTorch.</li>
            <li>Designed and produced social media campaigns, long-form property listings, and digital walkthroughs for luxury brands.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 text-indigo-600 dark:text-indigo-400">Aspirations</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            I am highly passionate about bridging the gap between high-impact visual content creation and advanced technical implementation. Whether I am writing React code, training an ML model, or editing cinema-grade videos, I strive to solve real-world problems with reliability, speed, and beautiful design.
          </p>

          {/* Resume Section */}
          <div className="prose dark:prose-invert max-w-xl mx-auto text-center py-10">
            <h1>Resume</h1>
            <p>You can download my resume using the link below:</p>
            <a
              href={resume}
              className="inline-block mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition"
              download
            >
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);
}