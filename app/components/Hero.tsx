import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="text-left">
        <h1 className="font-bold text-2xl">Hi, I'm Jeevan</h1>
        <p className="font-semibold text-lg">An aspiring Web developer</p>
      </div>
    </div>
  );
};

export default Hero;
