import React from "react";
import "./Advert.css";

const Advert = () => {
  return (
    <div className="advertcontainer">
      <div>
        <div>
          Bringing you the <span>best</span> audio gear
        </div>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src="/assets/person.png" alt="" />
    </div>
  );
};

export default Advert;
