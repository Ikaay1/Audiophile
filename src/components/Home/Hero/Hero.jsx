import React from "react";
import "./Hero.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";

const Hero = ({ products }) => {
  return (
    <div className="hero">
      <Navbar />
      {products.length ? (
        <div className="heroflex">
          <div>
            <p className="newproduct">NEWPRODUCT</p>
            <p className="headphoneheader">{products[0]?.name} Headphones</p>
            <p className="headphonedetails">{products[0]?.description}</p>
            <Link className="seeproduct" to={`/product/${products[0]?._id}`}>
              See Product
            </Link>
          </div>
          <img src="/assets/deskhead.png" alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
