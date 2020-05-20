import React from "react";
import "./Methodology.scss";
import PuzzleImage from "../../../assets/puzzle.png";
import PhoneImage from "../../../assets/phone.png";
import StatisticsImage from "../../../assets/statistics2.png";

const Methodology = () => {
  return (
    <div className="methodology">
      <div className="methodology__first-slider">
        <div className="content">
          <h2>
            ¿Cómo es la <br /> metodología TOC?
          </h2>
          <img src={PuzzleImage} alt="" />
          TOC significa Técnica, Objetivo y Constancia. El objetivo es claro:
          <span className="highlighter">
            {" "}
            pasar el examen de residencia o especialización médica,
          </span>{" "}
          quizás tengamos la constancia, pero a veces no sabemos con qué técnica
          prepararnos. Es por eso que muchos estudiantes se preguntan ¿por qué
          estudio tanto y me va mal en los exámenes?
        </div>
      </div>
      <div className="methodology__second-slider">
        <div className="content">
          <img src={PhoneImage} alt="" />
          <h2>
            Como estrategia de <br /> motivación y constancia...
          </h2>
          <br />
          Formarás parte de un grupo de estudio al que diariamente, de lunes a
          viernes,  enviaremos un AbstracTOC que es un resumen de una temática
          recurrente en los exámenes de especialización. <br /> <br />
          Después de estudiarlo resolverás un examen. El sábado haremos un
          examen acumulativo de toda la semana. <br /> <br />
          ¿Sabes qué es lo mejor? que diariamente tendremos un ranking con los
          puntos de los exámenes para que midas tu constancia y compitas con
          otros estudiantes.
        </div>
      </div>
      <div className="methodology__third-slider">
        <div className="content">
          <img src={StatisticsImage} alt="" />
          <h2>
            Premios a la actitud <br /> TOC
          </h2>
          Cada seis semanas hacemos una semana de simulacros. Durante este
          tiempo has acumulado puntos con tus exámenes. Si has acumulado el
          puntaje más alto del corte, el siguiente mes es GRATIS. En ese momento
          se reinician de nuevo los puntajes.
        </div>
      </div>
    </div>
  );
};

export default Methodology;
