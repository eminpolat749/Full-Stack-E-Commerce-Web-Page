import React from "react";
import './Hero.css';
import { EmblaCarousel } from "../EmblaCarousel/EmblaCarousel";
import imageUrl from "../Assets/jpg1.jpg";


const Hero = () => {
  return (
    <div>
      <div className="hero-image-with-text-button">
        <img src={imageUrl} alt="" />
        <div className="hero-overlay">
          <h2>New Arrival Products</h2>
          <p>Products suitable for every budget</p>
          <button>LATEST COLLECTİON</button>
        </div>
      </div>
      <EmblaCarousel />
    </div>
  );
};

export default Hero;
