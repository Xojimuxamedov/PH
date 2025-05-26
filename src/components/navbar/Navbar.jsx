import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-top-inner">
          <h2 className="navbar-top-title">
            "FARM LOYIHA" mas`uliyati cheklangan jamiyati
          </h2>
          <div className="navbar-contact">
            <a
              class="headerup-first-mailText"
              href="mailto:pharm.engineering@mail.ru?subject=Salom&body=Assalomu alaykum, sizga xabar yozyapman."
              target="_blank"
            >
              Gmail
            </a>
            <a class="headerup-first-mailText" href="tel:+998996511111">
              +998996511111
            </a>
            <a class="headerup-first-mailText" href="tel:+998998045040">
              +998998045040
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-inner">
          <img
            src="../../images/LOGO-loyiha.png"
            alt="Farm Loyiha logo"
            className="navbar-logo"
          />
          <div className="navbar-links">
            <div className="navbar-link">Bosh sahifa</div>
            <div className="navbar-link">Biz haqimizda</div>
            <div className="navbar-link">Xizmatlar</div>
            <div className="navbar-link">Bog'lanish</div>
            <div className="navbar-link">Yangiliklar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
