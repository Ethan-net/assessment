import React from "react";
import Aboutme from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Passion from "../pages/Passion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex">
      <div>
        <h1>
          <strong className="text-blue-400 font-bold p-2 rounded-full text-2xl ">
            A
          </strong>
          jibola
        </h1>
      </div>
      <div className="flex gap-5">
        <Link to="/">
          <button> About Me</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
        <Link to="/hobbies">
          <button>Hobbies</button>
        </Link>
        <Link to="/passion">
          <button>Passion</button>
        </Link>
      </div>
    </div>
  );
}
