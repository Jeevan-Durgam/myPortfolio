import React from "react";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Skills />
    </div>
  );
};

export default page;
