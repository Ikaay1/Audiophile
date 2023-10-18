import React from "react";
import Navbar from "../../Navbar";
import "./Header.css";
import "../../Home/Hero/Hero.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="producthero">
        <Navbar />
      </div>
      <div className="productback" onClick={() => navigate(-1)}>
        Go Back
      </div>
    </div>
  );
};

export default Header;
