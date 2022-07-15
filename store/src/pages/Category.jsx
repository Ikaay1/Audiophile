import React, { useState, useEffect } from "react";
import Header from "../components/Category/Header/Header";
import Shop from "../components/Home/Shop/Shop";
import Show from "../components/Category/Show/Show";
import Advert from "../components/Home/Advert/Advert";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { url } from "../url";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${url}/category/${category}`)
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };

    getProducts();
  }, [category]);

  if (isLoading) return <Loader />;

  return !products.length ? (
    <div>No Product in {category} category</div>
  ) : (
    <div>
      <Header />
      <Show products={products} setProducts={setProducts} category={category} />
      <Shop />
      <Advert />
      <Footer />
    </div>
  );
};

export default Category;
