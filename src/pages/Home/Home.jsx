import React from "react";
import data from "../../data/Data.json";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
