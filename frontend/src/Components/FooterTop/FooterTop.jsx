import React from "react";
import "./FooterTop.css";
import footer_logo from "../Assets/logo_big.png";
import brands from "../Assets/brands.png";

const FooterTop = () => {
  return (
    <div>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Fashion & Vogue</p>
      </div>
      <img src={brands} alt="" className='picture'/>
    </div>
  );
};

export default FooterTop;
