import React from "react";
import HomeCarousel from "./carousel/Carousel";
import { Link } from "react-router";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <HomeCarousel />
      <div className="header-contact">
        <div className="header-contact-inner">
          <p className="header-contact-text">
            Ko'proq malumot olish uchun biz bilan bog'laning
          </p>
          <Link className="header-contact-link" to={"/contact"}>Bog'lanish</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
