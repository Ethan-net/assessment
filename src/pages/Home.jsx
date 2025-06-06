import React from "react";
import Aboutme from "../components/AboutMe";

import TechStack from "./TeckStack";
import Projects from "./Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Aboutme />;
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}
