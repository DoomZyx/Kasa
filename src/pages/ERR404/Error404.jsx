import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "../ERR404/_Error404.scss";
import Footer from "../../components/Footer/Footer";

const Error404 = () => {
  return (
    <>
    <Header />
    <div className="error-404">
      <h1>404</h1>
      <p> Oups! La page que vous demandez n'existe pas. </p>
      <Link to="/" className="home-link">
        Retourner à la page d'accueil
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default Error404;
