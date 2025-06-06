import React from "react";

function Footer() {
  return (
    <div className="my-12 mx-[10%]">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="font-bold text-lg bg-gradient-to-r from-blue-500 via-black to-pink-500 bg-clip-text text-transparent">
            {"{Ethan}"}
          </h1>
        </div>
        <div className="flex gap-5 text-sm text-zinc-600">
          <p>+2347068561533</p>
          <p>koredeajibola@gmail.com</p>
          <img
            className="w-8"
            src="https://img.icons8.com/?size=100&id=S2QxUya6RH9I&format=png&color=000000"
            alt=""
          />
        </div>
      </div>
      <hr className=" border-[1px] border-zinc-400" />
    </div>
  );
}

export default Footer;
