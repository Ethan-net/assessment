import React from "react";
import Aboutme from "../pages/AboutMe";

export default function Navbar() {
  return (
    <div>
      <div>
        <h1>
          <strong className="bg-blue-400 p-2 rounded-full">A</strong>jibola
        </h1>
      </div>
      <Aboutme />
    </div>
  );
}
