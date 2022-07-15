import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shopcontainer">
      <div className="headphone">
        <img src="/assets/headphone.png" alt="" />
        <p>HEADPHONES</p>
        <div>
          <Link className="shoplinks" to="/category/headphones">
            SHOP <img src="/assets/arrow.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="speaker">
        <img src="/assets/speaker.png" alt="" />
        <p>SPEAKERS</p>
        <div>
          <Link className="shoplinks" to="/category/speakers">
            SHOP <img src="/assets/arrow.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="earphone">
        <img src="/assets/earphone.png" alt="" />
        <p>EARPHONES</p>
        <div>
          <Link className="shoplinks" to="/category/earphones">
            SHOP <img src="/assets/arrow.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
