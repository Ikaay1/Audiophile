import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../App";
import "../components/Category/Show/Show.css";
import Footer from "../components/Footer/Footer";
import Advert from "../components/Home/Advert/Advert";
import Shop from "../components/Home/Shop/Shop";
import Features from "../components/Product/Features/Features";
import Gallery from "../components/Product/Gallery/Gallery";
import Header from "../components/Product/Header/Header";
import Show from "../components/Product/Show/Show";
import Suggestion from "../components/Product/Suggestion/Suggestion";
import axios from "axios";
import { url } from "../url";
import Loader from "../components/Loader/Loader";

const ProductDetail = () => {
  const { cart, setCart } = useStateContext();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      axios
        .get(`${url}/${id}`)
        .then((res) => {
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };

    getProduct();
  }, [id]);

  if (isLoading) return <Loader />;

  return !product?.name ? (
    <div>No Product in with the Id {id}</div>
  ) : (
    <div>
      <Header />
      <Show
        product={product}
        setProduct={setProduct}
        quantity={quantity}
        cart={cart}
        setCart={setCart}
        setQuantity={setQuantity}
      />
      <Features product={product} />
      <Gallery />
      <Suggestion product={product} />
      <Shop />
      <Advert />
      <Footer />
    </div>
  );
};

export default ProductDetail;
