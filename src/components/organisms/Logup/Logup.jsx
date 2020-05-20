import React, { useState, useEffect } from "react";
import "./Logoup.scss";
import { useForm } from "react-hook-form";
import M from "materialize-css/dist/js/materialize.min.js";

const Logoup = () => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [profile, setProfile] = useState(null);
  const [modalInstance, setModalInstance] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
  });
  const {
    register: codeRegister,
    handleSubmit: codeHandleSubmit,
    errors: codeErrors,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    let modal = document.querySelector("#modal");
    setModalInstance(M.Modal.init(modal, {}));
  }, []);

  const previewProfile = (event) => {
    let file = event.target.files[0];

    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      event.target.value = "";
      modalInstance.open();
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (res) => {
      setProfile({
        name: file.name,
        file: res.target.result,
      });
    };
  };

  const greet = (event) => {
    setName(watch("name"));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkCode = (data) => {
    console.log(data);
    setChecked(true);
  };

  return (
    <div className="logup__container">
      <div className="logup__background">
        <div className="logup__background__circle"></div>
      </div>
      <div className="logup">
        <div className="logup__info card">
          <div className="logup__info__container">
            <input
              id="profile"
              name="profile"
              type="file"
              accept="image/x-png,image/jpeg"
              className="validate"
              onChange={previewProfile}
            />
            {profile ? (
              <label
                htmlFor="profile"
                className="logup__info__container__photo"
              >
                <img src={profile.file} alt="" />
              </label>
            ) : (
              <>
                <label
                  htmlFor="profile"
                  className="logup__info__container__profile"
                >
                  <p>Cargar perfil</p>
                </label>
              </>
            )}
            <h5 className="truncate">Bienvenido {name}</h5>
          </div>
        </div>
        <div className="logup__form card row">
          <form className="col 12" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field col s12">
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="email">Correo electronico</label>
              {errors.email && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <div className="input-field col s12">
              <input
                id="id"
                name="id"
                type="number"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="id">Cedula</label>
              {errors.id && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <div className="input-field col s12">
              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                ref={register({ required: true })}
                onChange={greet}
              />
              <label htmlFor="name">Nombres</label>
              {errors.name && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <div className="input-field col s12">
              <input
                id="last-name"
                name="lastName"
                type="text"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="last-name">Apellidos</label>
              {errors.lastName && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <div className="input-field col s12">
              <input
                id="whatsapp"
                name="whatsapp"
                type="text"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="whatsapp">Whatsapp</label>
              {errors.whatsapp && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <div className="input-field col s12">
              <input
                id="city"
                name="city"
                type="text"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="city">Ciudad de residencia</label>
              {errors.city && (
                <span className="red-text helper-text">Requerido</span>
              )}
            </div>
            <button
              className="btn waves-effect waves-light right"
              type="submit"
              name="action"
            >
              Enviar
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div id="modal" className="modal">
        <div className="modal-content">
          <h4 className="red-text">Archivo desconocido</h4>
          <p>La foto debe estar en formato PNG o JPG/JPEG</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Aceptar
          </a>
        </div>
      </div>
      {!checked && (
        <div className="logup__container__saver">
          <div className="logup__container__saver__modal row">
            <form className="col s12" onSubmit={codeHandleSubmit(checkCode)}>
              <div className="row">
                <h3>Ingresa el código de matricula</h3>
                <div className="input-field col s12">
                  <i className="material-icons prefix">vpn_key</i>
                  <input
                    id="code"
                    name="code"
                    type="text"
                    className="validate"
                    ref={codeRegister({ required: true })}
                  />
                  <label htmlFor="code">Codigo</label>
                  {codeErrors.code && (
                    <span className="red-text helper-text">Requerido</span>
                  )}
                </div>
                <button
                  className="btn waves-effect waves-light right"
                  type="submit"
                  name="action"
                >
                  Enviar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logoup;
