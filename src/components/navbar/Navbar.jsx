import { Link } from "react-router";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <h2 className="navbar-top-title">
            "FARM LOYIHA" mas`uliyati cheklangan jamiyati
          </h2>
          <div className="navbar-top-contact">
            <a
              class="navbar-top-mail"
              href="mailto:pharm.engineering@mail.ru?subject=Salom&body=Assalomu alaykum, sizga xabar yozyapman."
              target="_blank"
            >
              Gmail
            </a>
            <a class="navbar-top-mail" href="tel:+998996511111">
              +998996511111
            </a>
            <a class="navbar-top-mail" href="tel:+998998045040">
              +998998045040
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-inner">
          <Link to={"/"}>
            <img
              src="/images/logo-mini.png"
              alt="Farm Loyiha"
              className="navbar-bottom-logo"
            />
          </Link>
          <div className="navbar-bottom-links">
            <Link to={"/about"} className="navbar-bottom-link">
              Bosh sahifa
            </Link>
            <Link to={"/about"} className="navbar-bottom-link">
              Biz haqimizda
            </Link>
            <Link to={"/about"} className="navbar-bottom-link">
              Xizmatlar
            </Link>
            <Link to={"/about"} className="navbar-bottom-link">
              Bog'lanish
            </Link>
            <Link to={"/about"} className="navbar-bottom-link">
              Yangiliklar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
