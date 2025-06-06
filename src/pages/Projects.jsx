import React from "react";
import linklogo from "../assets/linklogo.png";
import git from "../assets/git.svg";
import phouse from "../assets/powerhouse.png";
import crypto from "../assets/cryptop.png";
import rvep from "../assets/rvep.png";
import web3fruity from "../assets/web3fruit.png";
import eatright from "../assets/eatrightMain.png";
import ERadmin from "../assets/DashBoard.png";

export default function Projects() {
  return (
    <div className="mt-20 mx-[10%]">
      <div className="flex flex-col mb-8 gap-5 text-center">
        <h2 className="textcolor font-bold text-3xl">Projects</h2>
        <p className="text-sm text-gray-600">Some of my recent Projects</p>
      </div>
      <ul className="flex gap-20 justify-center flex-wrap">
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={phouse} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">Power House</h2>
            <p className="text-[10px] text-zinc-600">
              Designed to support solar and inverter installation companies by
              providing an online platform for potential customers to explore
              solar products, estimates their needs , and book inspection for
              installation
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> React, Css, Tailwind, Expressjs,
              MongoDB
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a
                  className="text-[8px]"
                  href="https://powerhouse-6vlv.onrender.com"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a
                  className="text-[8px]"
                  href="https://github.com/Ethan-net/PowerHouse.git"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={crypto} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">Cryptop User Auth</h2>
            <p className="text-[10px] text-zinc-600">
              User Authentication for Cryptop, a secure escrow blockchain
              platform
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> Expressjs, MongoDB,Nodejs, Jwt,
              SwaggerUI, Mailtrap for Email verification
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a className="text-[8px]" href="#">
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a
                  className="text-[8px]"
                  href="https://github.com/Ethan-net/Cryptopay.git"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={rvep} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">R-video Editor</h2>
            <p className="text-[10px] text-zinc-600">
              Collaborate with a team of developers, as team lead to build this
              open source video editor app front End
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> React, Css, Tailwind, FabricJs,
              media Js, Typescript,
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a className="text-[8px]" href="https://rvep.vercel.app/">
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a className="text-[8px]" href="">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={web3fruity} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">Web3 Fruity</h2>
            <p className="text-[10px] text-zinc-600">
              collaborated with a team to build this web3 project that helps you
              keep track of newly launched crypto project and airdrops
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> React, Css,Typescript, Tailwind,
              Expressjs, MongoDB
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a className="text-[8px]" href="https://www.web3fruity.com/">
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a className="text-[8px]" href="">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={eatright} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">EatRight Web</h2>
            <p className="text-[10px] text-zinc-600">
              Eat Right offers a modern, seamless experience — from browsing
              dynamic price menu and exploring a variety of dishes to placing
              orders and booking reservations, all with sleek design and full
              mobile responsiveness.
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> React, Css, Tailwind, Expressjs,
              MongoDB
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a
                  className="text-[8px]"
                  href="https://eat-right-main.vercel.app/"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a
                  className="text-[8px]"
                  href="https://github.com/Ethan-net/EatRightMain.git"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-col gap-4 p-3 rounded-lg w-52 shadow-xl">
          <img src={ERadmin} alt="" />
          <div className="flex flex-col gap-4">
            <h2 className="textcolor text-2xl font-bold">EatRight Admin</h2>
            <p className="text-[10px] text-zinc-600">
              Eat Right Admin is the central dashboard for managing all CRUD
              operations related to the menu list, food orders, and overall site
              activity. It controls and updates most of what is displayed on the
              main Eat Right website, ensuring smooth monitoring and content
              management
            </p>
            <h3 className="font-thin text-sm">
              <strong>Tech stack :</strong> React, Css, Tailwind, Expressjs,
              MongoDB
            </h3>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-4" src={linklogo} alt="" />
                <a
                  className="text-[8px]"
                  href="https://eat-right-admin.vercel.app/"
                >
                  Live Preview
                </a>
              </div>
              <div className="flex items-center">
                <img className="w-4" src={git} alt="" />
                <a
                  className="text-[8px]"
                  href="https://github.com/Ethan-net/eat_right_admin.git"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
