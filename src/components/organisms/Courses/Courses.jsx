import React from "react";
import "./Courses.scss";
import LogoImage from "../../../assets/logo.png";
import TouchImage from "../../../assets/touch.png";
import CickImage from "../../../assets/click.png";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__first-slider">
        <div className="courses__first-slider__title">
          <h2>Cursos</h2>
          <img src={LogoImage} alt="" />
        </div>
        <div className="courses__first-slider content">
          <img src={TouchImage} alt="" />
          Hola!!! Soy Juan David Bohórquez, médico general y anestesiólogo de la
          Universidad de Antioquia, además fundador de Cursos TOC, un curso que
          te permitirá  preparar el examen de ingreso a residencias o
          especializaciones médicas, con la técnica de estudio que a mi me
          permitió pasar de primero a anestesiología en un solo intento.
        </div>
      </div>
      <div className="courses__second-slider content">
        <img src={CickImage} alt="" />
        <p>
          {" "}
          Este curso tiene una duración de{" "}
          <span className="highlighter">7 meses</span> y un valor de solo
          <span className="highlighter">$100mil pesos al mes.</span> ¿Por qué
          tan económico? porque estamos convencidos de la democratización de la
          educación y que tanto personas de bajos como de altos ingresos
          económicos tienen el mismo derecho a especializarse.
        </p>
        <p>
          Es por eso que somos la mejor opción en precio y en metodología de
          estudio para preparar el examen de residencia médica.
        </p>

        <p>
          Debes saber además que el curso es{" "}
          <span className="highlighter">completamente virtual</span> y lo puedes
          realizar desde tu celular{" "}
          <span className="highlighter">a la hora que desees,</span> compitiendo
          por los primeros lugares del ranking de tu grupo y realizando test
          preparatorios todos los días.
        </p>
      </div>
    </div>
  );
};

export default Courses;
