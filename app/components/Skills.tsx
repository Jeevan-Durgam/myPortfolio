"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
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
    { name: "Canva", icon: SiCanva },
    { name: "Figma", icon: IoLogoFigma },
    { name: "Blender", icon: SiBlender },
    { name: "framer-motion", icon: SiFramer },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  const animateSkills = () => ({
    x: Math.random() * 2000 - 100,
    y: Math.random() * 2000 - 100,
    scale: Math.random() * 1.5 + 1,
    rotate: Math.random() * 180 - 45,
    transition: { duration: 0.5 },
  });

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 md:h-screen">
      <h2 className="text-3xl font-bold mt-12">Skills</h2>
      <p className="my-8 font-semibold">
        These are the skills I excel at. I am driven to learn more and explore
        the various frameworks and libraries that are available to create Web
        applications that create good user experiences.
      </p>
      {/* <div className="">
        <p className="my-4">
          These are the skills I excel at. I have a strong foundation with HTML,
          CSS and the concepts of basic, intermediate and advanced JavaScript.{" "}
        </p>
        <p className="my-4">
          After learning the core concepts, I started experimenting with
          frameworks and libraries and found comfort with react and its
          ecosystem. I also learned NextJS as a serverless full-stack
          alternative. For the styling, tailwindcss is my framework of choice
          because of its utility first approach and the ability to custom create
          themes and classes.
        </p>
        <p className="my-4">
          I also have knowledge on creating good User Interfaces and fun User
          Experience. Figma is the main tool i have in this section, because it
          is the most used and well-received in the designer and developer
          community.
        </p>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center rounded-lg p-4 shadow-md shadow-white"
            whileHover={animateSkills()}
          >
            <skill.icon className="w-8 h-8 mr-2" />
            <span className="text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
