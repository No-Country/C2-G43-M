import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

const Login = () => {
  const ThemeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <>
      <form className={`login-box ${ThemeReducer.mode} ${ThemeReducer.color}`}>
        <h1>Bienvenido!</h1>
        <h3 className="login-box--subtitle">Ingrese sus credenciales</h3>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Nombre de usuario" />
        </div>
        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Contraseña" />
        </div>

        <input
          type="button"
          className={`btnn ${ThemeReducer.mode} ${ThemeReducer.color}`}
          value="Ingresar"
        />
      </form>
      <div className="social-login">
        <div className="social__login-box">
          <h3>Contacto</h3>
          <div className="social-icons">
            <Link
              to="./"
              className="social-login__icon fab fa-instagram"
            ></Link>
            <Link to="./" className="social-login__icon fab fa-facebook"></Link>
            <Link to="./" className="social-login__icon fab fa-twitter"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
