import React from "react";
import myPic from "../assets/myimg.jpg";
import { motion } from "framer-motion";
import "../App.css";

export default function Aboutme() {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-[5%] md:mx-[10%] py-20 items-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-2 text-center md:text-left"
      >
        <h1 className="textcolor text-3xl md:text-5xl font-bold">Hi👋,</h1>
        <h1 className="text-3xl md:text-5xl textcolor font-bold">My Name is</h1>
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold">
          Ajibola Korede
        </h1>
        <h1 className="text-3xl md:text-5xl textcolor font-bold">
          I Build Things for web
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="rounded-full bg-gradient-to-t from-blue-400 to-pink-600 p-2"
      >
        <img
          className="w-[200px] h-[200px] md:w-auto md:h-[45dvh] rounded-full object-cover"
          src={myPic}
          alt="my-pic"
        />
      </motion.div>
    </div>
  );
}
