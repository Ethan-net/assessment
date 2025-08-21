import React from "react";
import linklogo from "../assets/linklogo.png";
import git from "../assets/git.svg";
import powerhouse from "../assets/powerhouse.PNG";
import crypto from "../assets/cryptop.PNG";
import rvep from "../assets/rvep.PNG";
import web3fruity from "../assets/web3fruit.PNG";
import eatright from "../assets/eatrightMain.PNG";
import ERadmin from "../assets/DashBoard.PNG";

export default function Projects() {
  return (
    <div className="mt-20 mx-4 sm:mx-8 md:mx-[10%]">
      <div className="flex flex-col mb-8 gap-5 text-center">
        <h2 className="textcolor font-bold text-2xl sm:text-3xl">Projects</h2>
        <p className="text-sm text-gray-600">Some of my recent Projects</p>
      </div>
      <ul className="flex gap-8 sm:gap-10 md:gap-14 lg:gap-20 justify-center flex-wrap">
        {[
          {
            src: powerhouse,
            title: "Power House",
            desc: "Designed to support solar and inverter installation companies by providing an online platform for potential customers to explore solar products, estimates their needs , and book inspection for installation",
            stack: "React, Css, Tailwind, Expressjs, MongoDB",
            live: "https://powerhouse-6vlv.onrender.com",
            repo: "https://github.com/Ethan-net/PowerHouse.git",
          },
          {
            src: crypto,
            title: "Cryptop User Auth",
            desc: "User Authentication for Cryptop, a secure escrow blockchain platform",
            stack:
              "Expressjs, MongoDB,Nodejs, Jwt, SwaggerUI, Mailtrap for Email verification",
            live: "#",
            repo: "https://github.com/Ethan-net/Cryptopay.git",
          },
          {
            src: rvep,
            title: "R-video Editor",
            desc: "Collaborate with a team of developers, as team lead to build this open source video editor app front End",
            stack: "React, Css, Tailwind, FabricJs, media Js, Typescript",
            live: "https://rvep.vercel.app/",
            repo: "",
          },
          {
            src: eatright,
            title: "EatRight Web",
            desc: "Eat Right offers a modern, seamless experience — from browsing dynamic price menu and exploring a variety of dishes to placing orders and booking reservations, all with sleek design and full mobile responsiveness.",
            stack: "React, Css, Tailwind, Expressjs, MongoDB",
            live: "https://eat-right-main.vercel.app/",
            repo: "https://github.com/Ethan-net/EatRightMain.git",
          },
          {
            src: ERadmin,
            title: "EatRight Admin",
            desc: "Eat Right Admin is the central dashboard for managing all CRUD operations related to the menu list, food orders, and overall site activity. It controls and updates most of what is displayed on the main Eat Right website, ensuring smooth monitoring and content management",
            stack: "React, Css, Tailwind, Expressjs, MongoDB",
            live: "https://eat-right-admin.vercel.app/",
            repo: "https://github.com/Ethan-net/eat_right_admin.git",
          },
        ].map((project, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 p-3 rounded-lg w-full sm:w-60 md:w-64 lg:w-72 shadow-xl"
          >
            <img src={project.src} alt="" />
            <div className="flex flex-col gap-4">
              <h2 className="textcolor text-lg sm:text-xl md:text-2xl font-bold">
                {project.title}
              </h2>
              <p className="text-[10px] sm:text-xs text-zinc-600">
                {project.desc}
              </p>
              <h3 className="font-thin text-sm">
                <strong>Tech stack :</strong> {project.stack}
              </h3>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <img className="w-4" src={linklogo} alt="" />
                  <a className="text-[8px] sm:text-[10px]" href={project.live}>
                    Live Preview
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-4" src={git} alt="" />
                  <a className="text-[8px] sm:text-[10px]" href={project.repo}>
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
