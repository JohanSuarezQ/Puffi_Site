import React from "react";

import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineQrCode2, MdStars } from "react-icons/md";
import { GiCheckedShield } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-links">
        <h1>Puffi</h1>
        <div className="footer-link-items1">
          <Link to="/">PUFI RAIN</Link>
          <Link to="/">PUFI PUFF</Link>
          <Link to="/">PUFI CARTs</Link>
          <Link to="/">PUFFI NAP</Link>
        </div>
        <div className="footer-link-items2">
          <Link to="/">CONTACTO</Link>
          <Link to="/">AYUDA</Link>
          <Link to="/">COMO COMPRAR</Link>
          <Link to="/">TÉRMINOS Y CONDICIONES</Link>
        </div>
      </div>
      <div className="footer-link-items3">
        <Link to="/">COMPRA 100% SEGURA</Link>
        <div className="certified-icons">
          <MdOutlineQrCode2 size={"3rem"} />
          <GiCheckedShield size={"3rem"} />
        </div>
      </div>

      <div className="footer-link-items4">
        <h2>SEGUINOS EN </h2>
        <div className="social-icons">
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>

          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
      <section className="social-media">
        <small className="website-rights">
          PUFFI © 2017 -Todos los derechos reservados
        </small>

        <Link to="/" className="social-logo">
          <MdStars className="navbar-icon" />
          BRANDLIVE
        </Link>
      </section>
    </div>
  );
};

export default Footer;
