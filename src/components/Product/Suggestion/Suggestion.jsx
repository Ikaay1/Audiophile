import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Suggestion.css";
import axios from "axios";
import { url } from "../../../url";

const Suggestion = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`${url}/category/${product.category}`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    product.category && getProducts();
  }, [product.category]);
  return (
    <div className="suggestbody">
      <p>You may also like</p>
      <div>
        {products
          .filter((item) => item._id !== product._id)
          .splice(0, 3)
          .map((item) => (
            <div key={item._id} className="item item1">
              <div className="image image1">
                <img src={item.image} alt="" />
              </div>
              <p className="suggestname">{item.name}</p>
              <Link to={`/product/${item._id}`} className="suggestbutton">
                See Product
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggestion;
