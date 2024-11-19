import React, { useState, useEffect } from "react";
import "./Carousel.scss"; 


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Charge l'image suivante 
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = images[(currentIndex + 1) % images.length];
  }, [currentIndex]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            fill="#ffffff"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </button>
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="Counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <button className="carousel-btn right" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            fill="#ffffff"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
