import React from "react";
import { Link } from "react-router-dom";
import "./Show.css";

const Show = ({ products, category }) => {
  return (
    <div>
      {products.map((product, i) =>
        i % 2 === 0 ? (
          <div key={product._id} className="categoryheroflex">
            <div className="centerheadphone">
              <img src={product.image} alt="" />
            </div>
            <div className="catdetails">
              <p className="categorynewproduct">NEWPRODUCT</p>
              <p className="categoryheadphoneheader">{`${product.name} ${category}`}</p>
              <p className="categoryheadphonedetails">{product.description}</p>
              <div>
                <Link
                  className="categoryseeproduct"
                  to={`/product/${product._id}`}
                >
                  See Product
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div key={product._id} className="categoryheroflex">
            <div className="centerheadphonesmall">
              <img src={product.image} alt="" />
            </div>
            <div className="catdetails">
              <p className="categoryheadphoneheader">{`${product.name} ${category}`}</p>
              <p className="categoryheadphonedetails">{product.description}</p>
              <div>
                <Link
                  className="categoryseeproduct"
                  to={`/product/${product._id}`}
                >
                  See Product
                </Link>
              </div>
            </div>
            <div className="centerheadphonebig">
              <img src={product.image} alt="" />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Show;
