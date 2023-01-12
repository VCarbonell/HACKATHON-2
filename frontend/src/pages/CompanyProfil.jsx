import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import "./companyProfil.scss";
import Button from "@components/Button";
import Header from "@components/Header";

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

    axios
      .post("http://localhost:8000/api/company/login", {
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
          navigate("/");
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
      <Header value="Login Pro" />
      <form className="login__form" onSubmit={logIn}>
        <input
          className="mainInput"
          placeholder="Company name"
          type="text"
          id="text"
          name="text"
        />
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
        <div className="login__switchWrap">
          <label className="login__switch">
            <input
              name="employee_only"
              type="checkbox"
              className="login__radio"
            />
            <span className="login__slider" />
          </label>
          <span className="login__employees">
            Allow only your employees to rent your cars.
          </span>
        </div>

        {email.includes("@") && password.length > 8 ? (
          <Button className="btn" type="submit" value="login" />
        ) : (
          <button disabled className="btn--disabled">
            Login
          </button>
        )}
      </form>
    </div>
  );
}

export default CompanyLogin;
