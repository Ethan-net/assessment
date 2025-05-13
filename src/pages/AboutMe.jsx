import React from "react";
import myPic from "../assets/myPic.jpg";

export default function Aboutme() {
  return (
    <div className="flex">
      <div className="rounded-full w-10">
        <img className="" src={myPic} alt="my-pic" />
      </div>
      <div>
        <h3>Software Developer</h3>
        <h1>Ajibola Korede</h1>
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
