import React from "react";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <AboutMe />
    </div>
  );
};

export default page;
