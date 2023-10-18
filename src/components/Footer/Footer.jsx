import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../Home/Hero/Hero.css";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footernav">
        <p className="center">
          <img src="/assets/audiophile 2.png" alt="" />
        </p>
        <div>
          <div>
            <Link className="navlinks" to="/">
              HOME
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/category/headphones">
              HEADPHONES
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/category/speakers">
              SPEAKERS
            </Link>
          </div>
          <div>
            <Link className="navlinks" to="/category/earphones">
              EARPHONES
            </Link>
          </div>
        </div>
      </div>
      <div className="footerfollow">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div>
          <img className="facebook" src="/assets/facebook.png" alt="" />
          <img src="/assets/twitter.png" alt="" />
          <img src="/assets/instagram.png" alt="" />
        </div>
      </div>
      <div className="copy">
        <p className="copyright">Copyright 2021. All Rights Reserved</p>
        <div className="followtab">
          <img className="facebook" src="/assets/facebook.png" alt="" />
          <img src="/assets/twitter.png" alt="" />
          <img src="/assets/instagram.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
