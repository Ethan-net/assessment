import React from "react";
import myPic from "../assets/myPic.jpg";

export default function Aboutme() {
  return (
    <div className="flex">
      <img className="w-full rounded-full" src={myPic} alt="my-pic" />
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
