import React from "react";
import "./Questions.scss";
import LensImage from "../../../assets/lens.png";
import CommentImage from "../../../assets/comment.png";
import DocumentsImage from "../../../assets/documents.png";
import ClickImage from "../../../assets/click.png";

const Questions = () => {
  return (
    <div className="questions">
      <h2>Preguntas frecuentes</h2>
      <br />
      <div className="content">
        <p>
          <span className="highlighter">
            ¿Cuál es el objetivo del Curso TOC?
          </span>
           Preparar el examen de residencia o especializaciones médicas con la
          mejor técnica de preparación de exámenes. <br /> <br />
          <span className="highlighter">¿Qué Significa TOC?</span>Técnica,
          Objetivo y Constancia. El objetivo es claro (pasar el examen de
          residencia), a veces tenemos la constancia, pero no sabemos con qué
          técnica estudiar. En el curso TOC ya tenemos resuelto esto, anímate.
          <br /> <br />
          <span className="highlighter">
            ¿Cuánto es el valor del curso TOC?
          </span>
          El curso tiene un valor de $100.000 mensuales y la duración es de
          siete meses. Si pagas el curso completo al iniciar, te hacemos un
          descuento del 10% <br /> <br />
          <span className="highlighter">¿Tienen algún tipo de descuento?</span>
          Por supuesto.  Si pagas el curso completo al iniciar, te hacemos un
          descuento del 10% así no pagas $700.000 sino $630.000. <br /> <br />
          <span className="highlighter">¿Cuánto dura el curso TOC?</span>7
          meses. <br /> <br />
          <span className="highlighter">
            ¿Cuántos temas de estudio manejan en Cursos TOC?
          </span>
          Tenemos experiencia en este tipo de exámenes, por eso hemos depurado
          los  125 temas que más se repiten en este tipo de pruebas. <br />{" "}
          <br />
          <span className="highlighter">
            ¿Cuáles son los temas que estudiamos en CURSOS TOC?
          </span>
          Los temas son clínicos, ginecología y obstetricia, cirugía, medicina
          interna, pediatría, trauma. Como te contamos anteriormente son temas
          seleccionados que hacen parte de los 125 temas más preguntados en los
          exámenes de residencia.
        </p>
        <img src={LensImage} alt="" />
      </div>
      <div className="content">
        <p>
          <span className="highlighter">
            ¿Cuál es la ventaja que Cursos TOC tiene  sobre otros cursos?
          </span>
          Que nuestra metodología tiene resultados comprobados, es una técnica
          de estudio novedosa  y además estamos seguros que es el precio más
          económico de mercado. <br /> <br />
          <span className="highlighter">
            ¿El Curso TOC es virtual o presencial?
          </span>
          El curso es 100% virtual, no tienes que desplazarte a ningún lado, lo
          puedes realizar desde tu casa, tu trabajo, una biblioteca, conectado a
          tu computadora o a tu dispositivo celular. <br /> <br />
          <span className="highlighter">¿Cuál es el horario del curso?</span>
          Al ser un curso de modalidad virtual no manejamos horarios, la hora de
          estudio la eliges tu de acuerdo a tu comodidad. 
          <br /> <br />
          <span className="highlighter">
            Escuché que manejan puntajes y ranking, ¿Cuál es el objetivo de eso?
          </span>
          Lo utilizamos como método de motivación, así estarás compitiendo en un
          grupo de estudio por las mejores calificaciones. De acuerdo a tus
          resultados, irás acumulando  puntos que te irán situando en las
          diferentes posiciones de nuestro Ranking. <br /> <br />
          <span className="highlighter">
            Si tienen un Ranking…¿Quiere decir que tienen un premio?
          </span>
          ¡Claro que si! y eso es lo mejor :). Cada 6 semanas realizamos un
          corte y la persona que lleve el mejor puntaje gana un mes gratis del
          curso. En ese momento se reinician todos los puntajes. <br /> <br />
          <span className="highlighter">
            ¿Qué pasa si por algún motivo debo retirarme del curso?
          </span>
          Si no puedes continuar por algún motivo, simplemente te retiras sin
          ningún costo adicional y puedes retomar cuando desees <br /> <br />
          <span className="highlighter">
            ¿Cuál es la mejor técnica para preparar el examen de residencia?
          </span>
          Sin duda, la mejor técnica  es hacer preguntas tipo examen todos los
          días. <br /> <br />
          <span className="highlighter">
            ¿Cuántas preguntas resolvemos en el curso?
          </span>
          Semanalmente 50; Cada 6 semanas hay simulacros diarios con 25
          preguntas. Total de preguntas resueltas en el curso: 1.875 preguntas
        </p>
        <img src={CommentImage} alt="" />
      </div>
      <div className="content">
        <p>
          <span className="highlighter">
            ¿Qué es lo que generalmente preguntan en los exámenes?
          </span>
          Las 3 cosas que más preguntan son:  1. ¿cuál es el diagnóstico del
          caso planteado?2. ¿Cuál es el examen o imagen de elección?3. ¿Cuál es
          el manejo o tratamiento más adecuado?Por eso al estudiar un tema te
          debes centrar en estos tres elementos. <br /> <br />
          <span className="highlighter">
            ¿Cuántas veces puedo resolver los exámenes diariamente?
          </span>
          Todas las veces que quieras y se tomará en cuenta la calificación más
          alta. <br /> <br />
          <span className="highlighter">¿Dónde se resuelven los exámenes?</span>
          Los exámenes se responden por medio de la aplicación “Socrative
          Student” desde tu celular o desde un computador. <br /> <br />
          <span className="highlighter">
            ¿Qué se hace en la semana de repaso?
          </span>
          Cada cinco semanas de estudio, realizamos una semana de repaso
          general, donde cada día deberás resolver un simulacro de 20 preguntas
          y el fin de semana uno de 25 preguntas. 
          <br /> <br />
          <span className="highlighter">
            ¿Cuánto tiempo debo estudiar a la semana?
          </span>
          Es más importante cómo estudiar, que cuánto tiempo estudiar. Lo más
          recomendado es que estudies todos los días un poco, y no dejar para
          estudiar un solo día todo lo de la semana. En el curso TOC todos los
          días estudiamos un tema por medio de un resumen o AbstracTOC y
          resolvemos un examen de 5 preguntas de lunes a viernes, el fin de
          semana se realiza un examen acumulativo (ver metodología). 6-8 horas
          de dedicación semanal como mínimo. <br /> <br />
          <span className="highlighter">¿Cuándo inicia el curso?</span>
          Los Cursos inician todos los lunes, con un grupo de estudio mínimo de
          10 personas. <br /> <br />
          <span className="highlighter">
            ¿Si vivo fuera de Colombia puedo realizar el curso TOC?
          </span>
          Claro que si, el curso lo puedes realizar desde cualquier parte del
          mundo, lo único que necesitas es acceso a internet. <br /> <br />
          <span className="highlighter">
            ¿Qué requisitos técnicos debe tener mi computador o celular para
            realizar el curso?
          </span>
          Simplemente acceso a internet y descargar la aplicación “Socrative
          Student” que dicho sea de paso es gratuita. <br /> <br />
          <span className="highlighter">¿Cómo es el método de pago?</span>
          Trabajamos con la pasarela de pagos PAYU, así que puedes pagar a
          través del PSE, o con tarjeta de crédito, incluso en efectivo en los
          puntos de pago autorizados. El pago lo haces desde nuestra página web
          haciendo clic aquí. <br /> <br />
          <span className="highlighter">¿Qué es eso de la Gamificación?</span>
          Es una metodología de motivación tomada de los juegos (game), en la
          cual apareces en un ranking de puntajes para ir compitiendo con los
          demás integrantes de tu grupo de estudio. <br /> <br />
          <span className="highlighter">
            ¿Cómo es el final o cierre del curso?
          </span>
          Al culminar el estudio y repaso de los 125 temas, se realizan exámenes
          de simulacros para que te des cuenta de lo mucho que has aprendido y
          cómo tu cerebro ha aprendido a resolver exámenes.
        </p>
        <img src={DocumentsImage} alt="" />
      </div>
      <div className="post-data">
        <div className="post-data__content">
          <h2>Matricúlate</h2>
          <h5>Quiero probar cinco días gratis</h5>
          <a
            href="https://chat.whatsapp.com/BzczejEodHvHjxwRz1rMg3"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://chat.whatsapp.com/BzczejEodHvHjxwRz1rMg3
          </a>
          <p>
            Este link te llevará a un grupo de whatsapp donde se realiza una
            muestra del curso TOC de 5 días.
          </p>
        </div>
        <img src={ClickImage} alt="" />
      </div>
    </div>
  );
};

export default Questions;
