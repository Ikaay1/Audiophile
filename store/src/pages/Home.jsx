import React, { useEffect, useState } from "react";
import Advert from "../components/Home/Advert/Advert";
import Display from "../components/Home/Display/Display";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero/Hero";
import Shop from "../components/Home/Shop/Shop";
import { url } from "../url";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${url}`)
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
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Hero products={products} />
      <Shop />
      <Display products={products} />
      <Advert />
      <Footer />
    </div>
  );
};

export default Home;
