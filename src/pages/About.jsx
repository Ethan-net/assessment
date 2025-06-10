import React from "react";
import calender from "../assets/calender.svg";
import building from "../assets/building.svg";
import location from "../assets/location.svg";

function About() {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mt-10 md:mt-20 ml-4 md:ml-10">
      <h1 className="textcolor font-bold text-2xl md:text-3xl my-6 md:my-10">
        About Me
      </h1>
      <p className="text-zinc-600 text-sm">
        I'm a full-stack developer with a strong focus on backend development
        using Node.js and Express. I enjoy building real-world, user-focused
        applications and have worked on projects across e-commerce, fintech, and
        restaurant services. Some of my recent work includes EatRight, a
        restaurant platform with full admin control; Arami, a multi-vendor
        beauty marketplace; and Payquick, a fintech solution. I'm passionate
        about clean architecture, API design, and creating scalable systems that
        power seamless user experiences
      </p>

      <div>
        <h2 className="textcolor font-bold text-2xl md:text-3xl my-6 md:my-10">
          Work Experience
        </h2>
        <ul>
          {/* Experience Item */}
          <li className="my-6 md:my-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-thin text-zinc-500 text-xl md:text-2xl">
                Full-Stack Software Developer
              </h3>
              <p className="bg-green-200 text-green-700 text-[12px] px-5 py-1 font-semibold rounded-xl">
                Full Time
              </p>
            </div>
            <section className="flex flex-col md:flex-row md:justify-between text-[12px] text-zinc-500 gap-2 mt-2">
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-1 items-center">
                  <img src={building} alt="" />
                  <p>CVToCAREER</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={location} alt="" />
                  <p>Remote Australia</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={calender} alt="" />
                <p>Jun 2025 - current</p>
              </div>
            </section>
          </li>
          <hr className="border-[1px] border-zinc-400" />
          {/* Experience Item */}
          <li className="my-6 md:my-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-thin text-zinc-500 text-xl md:text-2xl">
                Full-Stack Software Developer
              </h3>
              <p className="bg-green-200 text-green-700 text-[12px] px-5 py-1 font-semibold rounded-xl">
                Full Time
              </p>
            </div>
            <section className="flex flex-col md:flex-row md:justify-between text-[12px] text-zinc-500 gap-2 mt-2">
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-1 items-center">
                  <img src={building} alt="" />
                  <p>Donclem-Technology</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={location} alt="" />
                  <p>Lagos</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={calender} alt="" />
                <p>Jan 2025 - May 2025</p>
              </div>
            </section>
          </li>
          <hr className="border-[1px] border-zinc-400" />

          {/* More Items... (same structure as above) */}
          <li className="my-6 md:my-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-thin text-zinc-500 text-xl md:text-2xl">
                Full-Stack web Developer
              </h3>
              <p className="bg-green-200 text-green-700 text-[12px] px-5 py-1 font-semibold rounded-xl">
                Internship
              </p>
            </div>
            <section className="flex flex-col md:flex-row md:justify-between text-[12px] text-zinc-500 gap-2 mt-2">
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-1 items-center">
                  <img src={building} alt="" />
                  <p>It skills Center,</p>
                  <p>Freelancing</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={location} alt="" />
                  <p>Lagos</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={calender} alt="" />
                <p>Sep 2023 - Dec 2024</p>
              </div>
            </section>
          </li>
          <hr className="border-[1px] border-zinc-400" />

          <li className="my-6 md:my-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="font-thin text-zinc-500 text-xl md:text-2xl">
                Product designer and Digital Marketer
              </h3>
              <p className="bg-green-200 text-green-700 text-[12px] px-5 py-1 font-semibold rounded-xl">
                Full Time
              </p>
            </div>
            <section className="flex flex-col md:flex-row md:justify-between text-[12px] text-zinc-500 gap-2 mt-2">
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-1 items-center">
                  <img src={building} alt="" />
                  <p>Mavicon Investment</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={location} alt="" />
                  <p>Lagos</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={calender} alt="" />
                <p>Sep 2024 - Dec 2025</p>
              </div>
            </section>
          </li>
          <hr className="border-[1px] border-zinc-400" />
        </ul>
      </div>

      <h2 className="textcolor font-bold text-2xl md:text-3xl my-6 md:my-10">
        Education
      </h2>
      <ul>
        <li className="my-6 md:my-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="font-thin text-zinc-500 text-xl md:text-2xl">
              Computer Science B.sc
            </h3>
            <p className="bg-green-200 text-green-700 text-[12px] px-5 py-1 font-semibold rounded-xl">
              Full Time
            </p>
          </div>
          <section className="flex flex-col md:flex-row md:justify-between text-[12px] text-zinc-500 gap-2 mt-2">
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-1 items-center">
                <img src={building} alt="" />
                <p>UPIB</p>
                <p>Benin Republic</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={location} alt="" />
                <p>Cotonou</p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <img src={calender} alt="" />
              <p>Aug 2012 - Jul 2015</p>
            </div>
          </section>
        </li>
        <hr className="border-[1px] border-zinc-400" />
      </ul>
    </div>
  );
}

export default About;
