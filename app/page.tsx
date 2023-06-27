import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import VideoLoader from "./components/VideoLoader";

export default function Home() {
  return (
    <main className="">
      {/* <VideoLoader /> */}
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <ContactForm />
    </main>
  );
}
