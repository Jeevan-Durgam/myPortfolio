"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly p-4">
      <div>
        <h1 className="text-xl font-bold">My Portfolio</h1>
      </div>
      <div className="space-x-4 flex">
        <NavItem icon={FaHome} text="Home" />
        <NavItem icon={FaCode} text="Skills" />
        <NavItem icon={FaUser} text="AboutMe" />
        <NavItem icon={FaEnvelope} text="Contact" />
      </div>
    </nav>
  );
};

const NavItem = ({ icon: Icon, text }: { icon: IconType; text: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <Icon />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden md:inline-block"
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default Navbar;
