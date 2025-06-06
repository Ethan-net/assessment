import React from "react";

function Footer() {
  return (
    <div className="my-12 mx-[5%]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
        <div>
          <h1 className="font-bold text-lg bg-gradient-to-r from-blue-500 via-black to-pink-500 bg-clip-text text-transparent">
            {"{Ethan}"}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-sm text-zinc-600">
          <p className="text-center sm:text-left">+2347068561533</p>
          <p className="text-center sm:text-left">koredeajibola@gmail.com</p>
          <div className="flex justify-center sm:justify-start">
            <img
              className="w-6 sm:w-8"
              src="https://img.icons8.com/?size=100&id=S2QxUya6RH9I&format=png&color=000000"
              alt="Social icon"
            />
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-zinc-400" />
    </div>
  );
}

export default Footer;
