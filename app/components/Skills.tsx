"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { DiReact, DiCss3, DiNodejs, DiGit } from "react-icons/di";
import { SiCanva, SiTailwindcss, SiBlender, SiFramer } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: DiReact },
    { name: "Node.js", icon: DiNodejs },
    { name: "Git", icon: DiGit },
    { name: "Database", icon: FaDatabase },
    { name: "Canva", icon: SiCanva },
    { name: "Figma", icon: IoLogoFigma },
    { name: "Blender", icon: SiBlender },
    { name: "framer-motion", icon: SiFramer },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto py-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center rounded-lg p-4 shadow-md shadow-white"
            variants={listItemVariants}
          >
            <skill.icon className="w-8 h-8 mr-2" />
            <span className="text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
