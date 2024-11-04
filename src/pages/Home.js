import React from "react";
import data from "../data/Data.json";
import Header from "../components/Header/Header.js";
import Banner from "../components/Banner/Banner.js";
import Card from "../components/Card/Card.js";
import Footer from "../components/Footer/Footer.js";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
