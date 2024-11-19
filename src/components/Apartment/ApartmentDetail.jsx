import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "/src/data/Data.json";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import ToggleSection from "../ToggleSection/ToggleSection.jsx";
import StarRating from "./Rating/Rating.jsx";
import "./ApartmentDetail.scss";

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  if (!apartment) {
    return <p>Appartement non trouvé</p>;
  }
  return (
    <>
      <Header />
      <div className="apartment-detail">
        <Carousel images={apartment.pictures} />
        <h1>{apartment.title}</h1>
        <p className="location">{apartment.location}</p>
        <div className="apartment-info">
          <div className="tags">
            {apartment.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="host-info">
            <p>{apartment.host.name}</p>
            <img
              src={apartment.host.picture}
              alt={apartment.host.name}
              className="host-picture"
            />
          </div>
          <div className="rating">
            <StarRating rating={apartment.rating} />
          </div>
        </div>
        <div className="layout-section">
          <div className="toggle-wrapper">
            <ToggleSection
              className={`section ${
                showDescription ? "expanded" : ""
              }`}
              title="Description"
              content={<p>{apartment.description}</p>}
              showContent={showDescription}
              toggleContent={() => setShowDescription(!showDescription)}
            />
          </div>

          <div className="toggle-wrapper">
            <ToggleSection
              className={`equipments-section ${
                showEquipments ? "expanded" : ""
              }`}
              title="Equipments"
              content={
                <ul>
                  {apartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
              showContent={showEquipments}
              toggleContent={() => setShowEquipments(!showEquipments)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ApartmentDetail;
