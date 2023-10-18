import React from "react";
import Navbar from "../../Navbar";
import "../../Home/Hero/Hero.css";
import "./Header.css";
import { useParams } from "react-router-dom";

const Header = () => {
  const { category } = useParams();
  return (
    <div className="categoryhero">
      <Navbar />
      <div className="categoryheader">{category}</div>
    </div>
  );
};

export default Header;
