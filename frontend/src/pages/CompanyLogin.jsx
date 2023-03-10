import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import "./companyLogin.scss";
import Button from "@components/Button";
import logo from "@assets/icons/logo_orange.png";
import NavbarCompany from "@components/NavbarCompany";
import api from "@services/api";

function CompanyLogin() {
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
      .post("/company/login", {
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
          navigate("/companycar");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.request.status);
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
      <img className="login__logoOrange" src={logo} alt="" />
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
            <NavLink to="/signup">
              <p className="login__error--link login__error--link">Sign up</p>
            </NavLink>
          </span>
        ) : undefined}
        {/* */}

        {email.includes("@") && password.length > 8 ? (
          <Button className="btnComp" type="submit" value="login" />
        ) : (
          <button
            style={{
              backgroundColor:
                !email.includes("@") && !password.length > 8
                  ? "#ff9900"
                  : "#fdba56",
            }}
            disabled
            className="btn--disabled"
          >
            Login
          </button>
        )}
      </form>
      <NavbarCompany />
    </div>
  );
}

export default CompanyLogin;
