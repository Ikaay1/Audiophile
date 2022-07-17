import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../App";
import "./Cart.css";
import Shop from "./Home/Shop/Shop";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const { cart, setCart } = useStateContext();
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleQuantity = (sign, id) => {
    if (sign === "+") {
      const item = cart.find((item) => item._id === id);
      const newItem = { ...item, quantity: item.quantity + 1 };
      localStorage.setItem(
        "cart",
        JSON.stringify(cart.map((item) => (item._id === id ? newItem : item)))
      );
      setCart(cart.map((item) => (item._id === id ? newItem : item)));
    } else {
      const item = cart.find((item) => item._id === id);
      if (item.quantity === 1) {
        localStorage.setItem(
          "cart",
          JSON.stringify(cart.filter((item) => item._id !== id))
        );
        setCart(cart.filter((item) => item._id !== id));
      } else {
        const newItem = { ...item, quantity: item.quantity - 1 };
        localStorage.setItem(
          "cart",
          JSON.stringify(cart.map((item) => (item._id === id ? newItem : item)))
        );
        setCart(cart.map((item) => (item._id === id ? newItem : item)));
      }
    }
  };

  const handleOpenCart = () => {
    setOpenMenu(false);
    setOpenCart((prevOpenCart) => !prevOpenCart);
  };

  const handleOpenMenu = () => {
    setOpenCart(false);
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const handleRemoveAll = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div>
      <div className="nav">
        <div className="tabham">
          <div
            onClick={handleOpenMenu}
            style={{ cursor: "pointer" }}
            className="hamburger"
          >
            <img src="/assets/Rectangle.png" alt="" />
            <img src="/assets/Rectangle.png" alt="" />
            <img src="/assets/Rectangle.png" alt="" />
          </div>
          <NavLink to="/">
            <img className="audiotab" src="/assets/audiophile.png" alt="logo" />
          </NavLink>
        </div>
        <NavLink to="/">
          <img className="audio" src="/assets/audiophile.png" alt="logo" />
        </NavLink>
        <div className="navgroup">
          <div>
            <NavLink className="navlinks" to="/">
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink className="navlinks" to={"/category/headphones"}>
              HEADPHONES
            </NavLink>
          </div>
          <div>
            <NavLink className="navlinks" to={"/category/speakers"}>
              SPEAKERS
            </NavLink>
          </div>
          <div>
            <NavLink className="navlinks" to={"/category/earphones"}>
              EARPHONES
            </NavLink>
          </div>
        </div>
        <img
          onClick={handleOpenCart}
          className="cart"
          src="/assets/Combined Shape.png"
          alt=""
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="rectangle"></div>
      {openMenu ? <div className="mode"></div> : null}

      <Fade top when={openMenu}>
        <div className={`${openMenu ? "mobile open" : "mobile close"}`}>
          <Shop />
          <div className="white"></div>
        </div>
      </Fade>

      {openCart ? (
        <div>
          <div className="modal"></div>
          {/* cart */}
          <div className="cartbody">
            <div className="carthead">
              <div>{`CART(${cart.reduce((a, b) => a + b.quantity, 0)})`}</div>
              <p onClick={handleRemoveAll} style={{ cursor: "pointer" }}>
                Remove all
              </p>
            </div>
            <div className="cartitem">
              {cart.length ? (
                cart.map((item) => (
                  <div key={item._id} className="cartproductflex">
                    <div className="cartproduct">
                      <div className="cartimagecontainer">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="cartdesc">
                        <div>{item.name}</div>
                        <p>N{item.amount}</p>
                      </div>
                    </div>
                    <div className="cartamount">
                      <p
                        onClick={() => handleQuantity("-", item._id)}
                        style={{ cursor: "pointer" }}
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => handleQuantity("+", item._id)}
                        style={{ cursor: "pointer" }}
                      >
                        +
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ marginBottom: "1rem" }}>Cart is Empty</div>
              )}
            </div>
            <div className="carttotal">
              <div>Total</div>
              <p>N{cart.reduce((a, b) => a + b.quantity * b.amount, 0)}</p>
            </div>
            <button
              className={
                !cart.length ? "checkoutbuttondisabled" : "checkoutbtn"
              }
              disabled={cart.length ? false : true}
              onClick={() => navigate("/checkout")}
              style={{ cursor: "pointer" }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
