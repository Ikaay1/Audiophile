import React from "react";
import { Link } from "react-router-dom";
import "./Display.css";

const Display = ({ products }) => {
  return products.length ? (
    <div className="container">
      <div className="containerflex">
        <div className="centerlise">
          <img src="/assets/imgspeaker.png" alt="" />
        </div>
        <div className="zdiv">
          <p className="speak">{products[1]?.name} SPEAKER</p>
          <p className="upgrade">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div>
            <Link className="zdivlink" to={`/product/${products[1]?._id}`}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
      <div className="speakercontainer">
        <img src="/assets/Bitmap.png" alt="" />
        <div className="speakerinfo">
          <p>{products[2]?.name} SPEAKER</p>
          <div>
            <Link className="dislink" to={`/product/${products[2]?._id}`}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
      <div className="airpodflex">
        <img src="/assets/airpod.png" alt="" />
        <div className="airpodinfo">
          <p>{products[3]?.name} EARPHONES</p>
          <div>
            <Link className="dislink" to={`/product/${products[3]?._id}`}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Display;
