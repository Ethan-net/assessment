import React from "react";
import reacticon from "../assets/structure.png";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import git from "../assets/git.svg";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.svg";
import saas from "../assets/saas.svg";
import logogit from "../assets/logogit.svg";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mx-4 sm:mx-8 md:mx-[10%] my-10 p-4 sm:p-10"
    >
      <div className="mb-10">
        <h3 className="textcolor font-bold text-2xl sm:text-3xl text-center">
          My Tech stack
        </h3>
        <p className="textcolor text-sm my-5 text-center">
          Technologies I’ve been working with recently
        </p>

        {/* Top Row: Stacked Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 justify-items-center my-10">
          <div className="flex flex-col items-center">
            <img className="w-10" src={html} alt="HTML" />
            <p className="text-sm">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={css} alt="CSS" />
            <p className="text-sm">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={javascript} alt="JavaScript" />
            <p className="text-sm">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={bootstrap} alt="Bootstrap" />
            <p className="text-sm">BOOTSTRAP</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={reacticon} alt="React" />
            <p className="text-sm">REACT</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={git} alt="Git" />
            <p className="text-sm">GIT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000"
              alt="MongoDB"
            />
            <p className="text-sm">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={nodejs} alt="NodeJS" />
            <p className="text-sm">Nodejs</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={tailwind} alt="Tailwind" />
            <p className="text-sm">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
              alt="TypeScript"
            />
            <p className="text-sm">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10" src={logogit} alt="GitHub Logo" />
            <p className="text-sm">git</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000"
              alt="Figma"
            />
            <p className="text-sm">Typescript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
              alt="VS Code"
            />
            <p className="text-sm">Expressjs</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
