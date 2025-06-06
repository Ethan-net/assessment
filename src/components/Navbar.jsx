import React from "react";
import Aboutme from "../pages/AboutMe";

import Hobbies from "../pages/Projects";
import Passion from "../pages/Passion";
import { Link } from "react-router-dom";
import twitter from "../assets/twiter.svg";
import linkdn from "../assets/linkdn.svg";
import github from "../assets/github.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mx-[10%]">
      <div>
        <h1 className="font-bold text-lg bg-gradient-to-r from-pink-500 via-black to-blue-500 bg-clip-text text-transparent">
          {"{Ethan}"}
        </h1>
      </div>
      <div className="flex gap-7 text-gray-600 text-sm">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/skills">
          <button>Tech Stack</button>
        </Link>
        <Link to="/hobbies">
          <button>Projects</button>
        </Link>
        <Link to="/passion">
          <button>Contact</button>
        </Link>
      </div>
      <div className="flex gap-2">
        <img className="w-5" src={github} alt="" />
        <img className="w-5" src={twitter} alt="" />
        <img className="w-5" src={linkdn} alt="" />
      </div>
    </div>
  );
}
