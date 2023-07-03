import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default page;
