import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const [location, setLocation] = useState(useLocation().pathname);
  const [sidenavInstance, setInstanceSideNav] = useState(null);

  useEffect(() => {
    let sidenav = document.querySelector("#menu");
    setInstanceSideNav(M.Sidenav.init(sidenav, {}));
  }, []);

  const go = (route) => {
    setLocation(route);
    sidenavInstance.close();
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav className="navbar">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              <img src={Logo} className="logo" alt="" />
            </a>
            <a href="./" data-target="menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li
                className={`${location === "/cursotoc" ? "active" : ""}`}
                onClick={() => setLocation("/cursotoc")}
              >
                <Link to="/cursotoc">Inicio</Link>
              </li>
              <li
                className={`${location === "/cursos" ? "active" : ""}`}
                onClick={() => setLocation("/cursos")}
              >
                <Link to="/cursos">Cursos</Link>
              </li>
              <li
                className={`${location === "/metodologia" ? "active" : ""}`}
                onClick={() => setLocation("/metodologia")}
              >
                <Link to="/metodologia">Metodología</Link>
              </li>
              <li
                className={`${location === "/preguntas" ? "active" : ""}`}
                onClick={() => setLocation("/preguntas")}
              >
                <Link to="/preguntas">Preguntas</Link>
              </li>
              <li>
                <Link
                  to="/matricula"
                  onClick={() => setLocation("/matricula")}
                  className="waves-effect waves-light btn"
                >
                  Matricúlate
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="menu">
        <li>
          <br />
        </li>
        <li
          className={`${location === "/cursotoc" ? "active" : ""}`}
          onClick={() => go("/cursotoc")}
        >
          <Link to="/cursotoc">Inicio</Link>
        </li>
        <li
          className={`${location === "/cursos" ? "active" : ""}`}
          onClick={() => go("/cursos")}
        >
          <Link to="/cursos">Cursos</Link>
        </li>
        <li
          className={`${location === "/metodologia" ? "active" : ""}`}
          onClick={() => go("/metodologia")}
        >
          <Link to="/metodologia">Metodología</Link>
        </li>
        <li
          className={`${location === "/preguntas" ? "active" : ""}`}
          onClick={() => go("/preguntas")}
        >
          <Link to="/preguntas">Preguntas</Link>
        </li>
        <li onClick={() => go("/matricula")}>
          <Link to="/matricula" className="waves-effect waves-light btn">
            Matricúlate
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
