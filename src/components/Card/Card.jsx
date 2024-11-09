import React from "react";
import { Link } from "react-router-dom";
import "../Card/_Card.scss";

function Card({ title, cover, id }) {
  return (
    <div className="card">
      <Link to={`/apartment/${id}`} className="card-link">
        <img src={cover} alt={title} className="card-cover" />
        <div className="Card-content">
          <h2 className="Card-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
