import React from "react";
import myPic from "../assets/myimg.jpg";
import { motion } from "framer-motion";
import "../App.css";

export default function Aboutme() {
  return (
    <div className="flex justify-between mx-[10%] py-20 items-center border-1 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2"
      >
        <h1 className=" textcolor text-5xl font-bold">Hi👋,</h1>
        <h1 className="text-5xl textcolor font-bold">My Name is</h1>
        <h1 className="text-5xl bg-gradient-to-r from-blue-400  to-purple-600 bg-clip-text text-transparent font-bold">
          Ajibola Korede
        </h1>
        <h1 className="text-5xl textcolor font-bold">I Build Things for web</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="rounded-full bg-gradient-to-t from-blue-400  to-pink-600 p-2 "
      >
        <img
          className=" w-auto h-[45dvh] rounded-full  "
          src={myPic}
          alt="my-pic"
        />
      </motion.div>
    </div>
  );
}
