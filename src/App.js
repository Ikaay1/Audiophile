import React, { createContext, useEffect } from "react";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/Category";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/checkout"
          element={cart.length ? <Checkout /> : <Navigate to="/" />}
        />
      </Routes>
    </cartContext.Provider>
  );
}

export default App;

export const useStateContext = () => useContext(cartContext);
