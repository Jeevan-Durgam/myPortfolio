"use client";

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [h1Loaded, setH1Loaded] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous operation to load the <h1> tag
    setTimeout(() => {
      setH1Loaded(true);
    }, 2000); // Change the delay as per your requirement
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="text-left">
        <h1 className="font-bold text-2xl">
          <Typewriter
            words={["Hello, I'm Jeevan"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        {h1Loaded && (
          <p className="font-semibold text-lg">
            <Typewriter
              words={["An aspiring Web Developer"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
