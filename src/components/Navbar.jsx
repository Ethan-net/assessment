import React from "react";
import Aboutme from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Passion from "../pages/Passion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <h1>
          <strong className="bg-blue-400 p-2 rounded-full">A</strong>jibola
        </h1>
      </div>
      <Link to="/">
        <Aboutme />
      </Link>
      <Link to="/skills">
        <Skills />
      </Link>
      <Link to="/hobbies">
        <Hobbies />
      </Link>
      <Link to="/assion">
        <Passion />
      </Link>
    </div>
  );
}
