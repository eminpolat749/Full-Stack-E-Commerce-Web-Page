import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.jpg";

const Offers = () => {
  return (
    <div className="offers-image-with-text-button">
      <img src={exclusive_image} alt="" />
      <div className="offers-overlay">
        <h2>Exclusive Offers For You</h2>
        <p>On all products</p>
        <button>Check Now</button>
      </div>
    </div>
  );
};

export default Offers;
