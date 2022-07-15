import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="galleryflex">
      <div>
        <div className="djdiv">
          <img src="/assets/dj.png" alt="" className="dj" />
        </div>
        <div>
          <img src="/assets/gadgets.png" alt="" className="gadgets" />
        </div>
      </div>
      <img src="/assets/galleryheadphone.png" alt="" />
    </div>
  );
};

export default Gallery;
