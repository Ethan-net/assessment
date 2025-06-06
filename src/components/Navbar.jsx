import React, { useState } from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twiter.svg";
import linkdn from "../assets/linkdn.svg";
import github from "../assets/github.svg";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-md py-4 px-[10%]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg bg-gradient-to-r from-pink-500 via-black to-blue-500 bg-clip-text text-transparent">
          {"{Ethan}"}
        </h1>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 text-gray-600 text-sm">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/About">
            <button>About</button>
          </Link>
          <Link to="/skills">
            <button>Tech Stack</button>
          </Link>
          <Link to="/project">
            <button>Projects</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>

        <div className="hidden md:flex gap-2">
          <img className="w-5" src={github} alt="github" />
          <img className="w-5" src={twitter} alt="twitter" />
          <img className="w-5" src={linkdn} alt="linkedin" />
        </div>
      </div>

      {/* Mobile Menu Slide Animation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <Link to="/" onClick={toggleMenu}>
            <button>Home</button>
          </Link>
          <Link to="/About" onClick={toggleMenu}>
            <button>About</button>
          </Link>
          <Link to="/skills" onClick={toggleMenu}>
            <button>Tech Stack</button>
          </Link>
          <Link to="/project" onClick={toggleMenu}>
            <button>Projects</button>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <button>Contact</button>
          </Link>
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="https://github.com/Ethan-net">
            <img className="w-5" src={github} alt="github" />
          </Link>
          <img className="w-5" src={twitter} alt="twitter" />
          <Link to="https://www.linkedin.com/in/korede-ajibola-2a53981b5">
            <img className="w-5" src={linkdn} alt="linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
