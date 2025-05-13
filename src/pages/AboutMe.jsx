import React from "react";
import myPic from "../assets/myPic.jpg";

export default function Aboutme() {
  return (
    <div className="flex  items-center mx-[20%] shadow-lg p-10 border-1 ">
      <img
        className="mr-20  w-56 h-56 rounded-full border-8 border-gray-500 "
        src={myPic}
        alt="my-pic"
      />

      <div>
        <h3 className="text-2xl text-gray-500">Software Developer</h3>
        <h1 className="text-3xl my-5 text-blue-500 font-bold">
          Ajibola Korede
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          velit unde nam, doloremque beatae, voluptatem fuga placeat tenetur
          aperiam quos sint magni minima assumenda facilis ab doloribus
          architecto! Perspiciatis, quos.
        </p>
      </div>
    </div>
  );
}
