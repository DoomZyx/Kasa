import React from "react";
import "../Card/_Card.scss";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <div className="Card-content">
        <h2 className="Card-title"> {title} </h2>
      </div>
    </div>
  );
}

export default Card;
