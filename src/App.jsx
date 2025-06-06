import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/AboutMe";
import Navbar from "./components/Navbar";

import Hobbies from "./pages/Projects";
import Passion from "./pages/Passion";
import Home from "./pages/Home";
import TechStack from "./pages/TeckStack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<TechStack />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/passion" element={<Passion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
