import React from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';


import "../src/style.scss";

import HomePage from "./pages/Home/Home.jsx";
import ApartmentDetail from "./components/Apartment/ApartmentDetail";
import AboutPage from "./pages/About/About.jsx";
import Error404 from "./pages/ERR404/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartment/:id" element={<ApartmentDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
