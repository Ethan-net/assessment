import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Passion from "./pages/Passion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/passion" element={<Passion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
