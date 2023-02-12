/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-assign */
import React, { useState } from "react";
import axios from "axios";
import api from "@services/api";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "@components/Button";
import { useUser } from "../contexts/userContext";
import "./login.scss";
import logo from "../assets/icons/logo.png";

function Login() {
  const { setUserInfo } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;
  const [error, setError] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const logIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));

    api
      .post("/users/login", {
        email: formDataObj.email,
        password: formDataObj.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.status);
        } else {
          window.localStorage.setItem(
            "userData",
            JSON.stringify(response.data)
          );
          setUserInfo(response.data);

          if (location.state) {
            return navigate(location.state);
          }
          navigate("/booking");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.request.status);
      });
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
  };
  const checkPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="logo" />
      <form className="login__form" onSubmit={logIn}>
        <input
          onChange={checkEmail}
          className="mainInput"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
        />
        <input
          onChange={checkPassword}
          className="mainInput"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
        />
        {error === 404 ? (
          <span className="login__error">Wrong password, try again.</span>
        ) : error === 401 ? (
          <span className="login__error">
            We don't know each others yet, please{" "}
            <NavLink to="/signin">
              <p className="login__error--link login__error--link">Sign up</p>
            </NavLink>
          </span>
        ) : undefined}
        {/* */}
        {email.includes("@") && password.length > 8 ? (
          <Button className="btn" type="submit" value="login" />
        ) : (
          <button disabled className="btn--disabled">
            Login
          </button>
        )}
        <div className="LoginNoAccountContainer">
          <p className="LoginNoAccount">Don't have an account yet ?</p>
          <p
            className="LoginNoAccount LoginNoAccountBlue"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
