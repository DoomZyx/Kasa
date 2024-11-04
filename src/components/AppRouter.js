import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

function AppRouter() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
