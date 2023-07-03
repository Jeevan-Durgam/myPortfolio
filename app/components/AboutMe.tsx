"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState([0]);
  const [showOverlay, setShowOverlay] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleParagraphHover = (index: number) => {
    if (!visibleParagraphs.includes(index)) {
      setVisibleParagraphs([...visibleParagraphs, index]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const paragraphs = [
    "Hello! I'm Jeevan, a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in building modern, responsive websites and web applications using the latest web technologies.",
    " With expertise in front-end development, I have hands-on experience in frameworks like React and Next.js, enabling me to create interactive and dynamic user interfaces. I strive to deliver clean and efficient code while adhering to industry best practices and accessibility standards.",
    "In addition to my technical skills, I also have proficiency in design tools such as Canva and Figma, which allow me to create visually appealing layouts and graphics for a seamless user experience. I'm familiar with using Framer Motion for animations, bringing websites to life with engaging transitions and effects.",
    "As a well-rounded developer, I'm always eager to expand my skillset. I'm currently exploring the world of 3D design and animation using Blender, adding another dimension to my creative repertoire.",
    "I approach every project with a strong attention to detail, problem-solving mindset, and a commitment to delivering high-quality results. Whether it's building a responsive website, prototyping user interfaces, or crafting captivating animations, I'm dedicated to bringing ideas to life and exceeding client expectations.",
  ];

  const handleOverlayComplete = () => {
    setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto md:p-0 relative">
      {showOverlay && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={handleOverlayComplete}
        >
          <p className="text-white text-xl z-10">
            Hover over the paragraphs to see more
          </p>
        </motion.div>
      )}
      <motion.div
        className="max-w-2xl md:max-w-3xl mx-auto p-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-3xl font-bold mb-4" variants={textVariants}>
          About Me
        </motion.h2>
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-lg text-white/70 leading-relaxed mt-4 overflow-hidden"
            variants={textVariants}
            animate={visibleParagraphs.includes(index) ? "visible" : "hidden"}
            onMouseEnter={() => handleParagraphHover(index + 1)}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
