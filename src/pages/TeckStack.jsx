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
      // animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" items-center mx-[10%] my-10 p-10  "
    >
      <div className=" mb-10">
        <h3 className="textcolor font-bold text-3xl text-center">
          My Tech stack
        </h3>
        <p className="textcolor text-sm my-5 text-center">
          {" "}
          Technologies I’ve been working with recently
        </p>
        <div className="flex my-10 justify-between items-center">
          <div className="flex flex-col items-center">
            <img className="w-10  " src={html} alt="" />
            <p className="text-sm">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-10  " src={css} alt="" />
            <p className="text-sm">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10  " src={javascript} alt="" />
            <p className="text-sm">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10  " src={bootstrap} alt="" />
            <p className="text-sm">BOOTSTRAP</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10  " src={reacticon} alt="" />
            <p className="text-sm">REACT</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-10  " src={git} alt="" />
            <p className="text-sm">GIT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10  "
              src="https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000"
              alt=""
            />
            <p className="text-sm">MongoDB</p>
          </div>
        </div>
        <hr className="my-5"></hr>
      </div>
      <div className="flex justify-between items-center">
        <img className="w-10 " src={nodejs} alt="" />
        <img className="w-10 " src={tailwind} alt="" />
        <img
          className="w-10 "
          src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
          alt=""
        />
        <img className="w-10 " src={logogit} alt="" />
        <img
          className="w-10 "
          src="https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000"
          alt=""
        />
        <img
          className="w-10 "
          src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
          alt=""
        />
      </div>
    </motion.div>
  );
}
