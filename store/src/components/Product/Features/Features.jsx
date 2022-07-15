import React from "react";
import "./Features.css";

const Features = ({ product }) => {
  return (
    <div className="productfeaturesflex">
      <div className="productfeatures">
        <p className="pfeaturesnamehead">FEATURES</p>
        <p className="productfeaturesdetails pfeaturesdetail">
          {product.name ? product.features[0] : product?.features}
        </p>
        <p className="productfeaturesdetails">
          {product.name ? product.features[1] : product?.features}
        </p>
      </div>
      <div className="productfeaturesbox">
        <p>In the box</p>
        <div>
          <div>
            <span className="fspan">1x</span>
            {product?.category} Unit
          </div>
          <div>
            <span className="fspan">1x</span>Replacement Earoups
          </div>
          <div>
            <span className="fspan">1x</span>User Manual
          </div>
          <div>
            <span className="fspan">1x</span>3.5mm 5m Audio Cable
          </div>
          <div>
            <span className="fspan">1x</span>Travel Bag
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
