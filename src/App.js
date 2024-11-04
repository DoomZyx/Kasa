import React from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/style.scss";

import HomePage from "./pages/Home.js";
import AboutPage from "./pages/About.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
