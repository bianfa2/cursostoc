import React from "react";
import "./Layout.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import WhatsappIcon from "../../../assets/icons/whatsapp.jpg";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="fixed-action-btn">
        <a
          href="https://api.whatsapp.com/send?phone=573216677865&text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20del%20curso%20TOC"
          className="btn-floating btn-large transparent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WhatsappIcon} alt="" width="200%" />
        </a>
      </div>
      <footer>
        <Link to="/tos">Términos y Condiciones</Link>
      </footer>
    </>
  );
};

export default Layout;
