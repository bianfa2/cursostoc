import React, { useEffect } from "react";
import "./Main.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import Slider from "../../molecules/SliderContainer/Slider/Slider";
import touchImg from "../../../assets/touch.png";
import statisticsImg from "../../../assets/statistics.png";

const Main = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  }, []);

  return (
    <>
      <Slider id="slider1">
        <img src={touchImg} alt="" />
        <div className="content">
          <div className="title">
            <h2>Cursos</h2>
            <div className="logo"></div>
          </div>
          <p>
            Diseñamos un curso virtual para que a través de la{" "}
            <span className="highlighter">constancia</span> con una{" "}
            <span className="highlighter">técnica</span> de estudio sencilla,
            logres tu <span className="highlighter">objetivo</span> de ingresar
            a la especialización médica que deseas
          </p>
        </div>
      </Slider>
      <Slider id="slider2">
        <div className="content">
          <h2>Como estrategia de motivación y constancia...</h2>
          <p>
            Formarás parte de un grupo de estudio, en el que diariamente se
            subirá un ultraresumen TOC de una temática específica, presentarás
            exámenes cortos sobre ese contenido y habrá un ranking según los
            puntos que cada persona acumule diariamente en los exámenes.
          </p>
        </div>
        <img src={statisticsImg} alt="" />
      </Slider>
      <Slider id="slider3" buttonBackground="#ef5d50">
        <h3>
          Precio <br /> $100.000 <br /> COP{" "}
        </h3>
        <p className="monthly">
          MENSUAL <br />{" "}
          <span className="monthly__para">DURACIÓN DEL CURSO: 7 MESES</span>
        </p>
        <p className="free-test">
          TE DAMOS 5 DÍAS DE PRUEBA DEL <br /> CURSO TOC GRATIS
        </p>
      </Slider>
      <Slider id="slider4" buttonBackground="#f8f9fa" buttonColor="#ef5d50">
        <h2>
          Opiniones de los estudiantes <br /> de CursosTOC
        </h2>
        <div className="carousel">
          <div className="carousel-item">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    Me gusta mucho porque es una exigencia del día a día, me he
                    vuelto más disciplinada, algo que estaba perdiendo, ya no
                    pospongo las cosas!
                  </p>
                </div>
                <div className="card-action">LUISA</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    Los temas estudiados son muy interesantes, sirven no solo
                    para el examen sino para la vida
                  </p>
                </div>
                <div className="card-action">ANDREA</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    Nos da constancia para estudiar. Los temas son muy selectos
                    y son cosas que han salido en los exámenes
                  </p>
                </div>
                <div className="card-action">KAREN</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <p>La metodología es dinámica y agradable</p>
                </div>
                <div className="card-action">CAMILO</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <Slider id="slider5" buttonBackground="#f8f9fa" buttonColor="#2f496e">
        <h2>Si quieres iniciar el curso TOC</h2>
        <p>
          Comunicate con nosotros para brindarte información adicional de
          nuestra metodología.
        </p>
        <hr />
        <p className="contacts">contacto@cursostoc.com</p>
        <p className="contacts">www.cursostoc.com</p>
        <p className="contacts">(+57) 321 667 78 65</p>
      </Slider>
      <Slider id="slider6">
        <div className="slider6__container">
          <img src={touchImg} alt="" />
          <div className="slider6__container__content">
            <div className="slider6__container__content__title">
              <h2>Bienvenido al curso</h2>
              <div className="logo"></div>
            </div>
            <p>
              A través de la <span className="highlighter">constancia</span> con
              una <span className="highlighter">técnica</span> de estudio
              sencilla, logres tu <span className="highlighter">objetivo</span>{" "}
              de ingresar a la especialización médica que deseas.
            </p>
          </div>
          <p>
            Por favor llena el siguiente formulario con tus datos para iniciar
            tu proceso <a href="./">INSCRIPCIÓN CURSO TOC</a>
          </p>
        </div>
      </Slider>
    </>
  );
};

export default Main;
