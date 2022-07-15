import React from "react";
import "./Show.css";

const Show = ({ product, quantity, cart, setCart, setQuantity }) => {
  const handleQuantity = (sign) => {
    if (sign === "+") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (product.quantity !== 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };

  const onAdd = () => {
    const inCart = cart.find((item) => item._id === product._id);
    if (inCart) {
      const newinCart = {
        ...inCart,
        quantity: inCart.quantity + quantity,
      };
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((item) => (item._id === inCart._id ? newinCart : item))
        )
      );
      setCart(cart.map((item) => (item._id === inCart._id ? newinCart : item)));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity }])
      );
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  return (
    <div className="productheroflex">
      <div className="productcenterheadphone">
        <img src={product?.image} alt="" />
      </div>
      <div className="productdetails">
        <p className="productnewproduct">NEWPRODUCT</p>
        <p className="productheadphoneheader">{product?.name} Headphones</p>
        <p className="productdetailheadphonedetails">{product?.description}</p>
        <p className="productdetailamount">N{product?.amount}</p>
        <div className="buttonflex">
          <div className="productdetailquantity">
            <p
              className="productdetailminus"
              onClick={() => handleQuantity("-")}
              style={{ cursor: "pointer" }}
            >
              -
            </p>
            <p>{quantity}</p>
            <p
              className="productdetailplus"
              onClick={() => handleQuantity("+")}
              style={{ cursor: "pointer" }}
            >
              +
            </p>
          </div>
          <div
            className="productseeproduct"
            onClick={onAdd}
            style={{ cursor: "pointer" }}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
