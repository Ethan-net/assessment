import React from "react";
import reacticon from "../assets/structure.png";
import nodejs from "../assets/nodejs.png";

export default function Skills() {
  return (
    <div className=" items-center mx-[20%] shadow-lg p-10 border-1 ">
      <div>
        <h1 className="text-3xl font-bold text-center">React</h1>
        <div className="flex gap-10 items-center">
          <img className="w-[10vw] animate-pulse  " src={reacticon} alt="" />
          <p className="text-sm text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem doloremque ex, recusandae aspernatur sed maxime
            itaque labore! Illo earum quasi nam molestiae magni voluptatem
            aperiam reprehenderit, ad recusandae enim atque?
          </p>
        </div>
        <hr className="my-5"></hr>
      </div>
      <div className=" gap-10 items-center">
        <h1 className="text-3xl font-bold text-center">ExpressJs</h1>
        <div className="flex gap-10 items-center ">
          <img className="w-[10vw] animate-pulse" src={nodejs} alt="" />
          <p className="text-sm text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, molestiae dolores similique in optio non, nisi
            reprehenderit eius neque, assumenda maiores aliquam debitis dolore
            eos blanditiis praesentium voluptas excepturi.
          </p>
        </div>
      </div>
    </div>
  );
}
