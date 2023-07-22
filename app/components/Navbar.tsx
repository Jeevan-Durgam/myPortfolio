"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 md:mr-72">
              <Link href="/" className="text-white text-xl font-bold">
                JD
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaUser className="mr-2" />
                  About
                </Link>
                <Link
                  href="/skills"
                  className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaCode className="mr-2" />
                  Skills
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <FaEnvelope className="mr-2" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={isOpen ? "md:hidden" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaUser className="mr-2" />
            About
          </Link>
          <Link
            href="/skills"
            className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaCode className="mr-2" />
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:bg-white/60 hover:text-black px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
