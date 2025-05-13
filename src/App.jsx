import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/AboutMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
