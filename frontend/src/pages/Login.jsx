import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import "./login.scss";

function Login() {
  const { userInfo, setUserInfo } = useUser();
  const [input, setInput] = useState("");
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
      .post("http://localhost:8000/api/users/login", {
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

  const checkInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="login">
      <h2>login page</h2>
      <form className="login__form" onSubmit={logIn}>
        <input
          onChange={checkInput}
          className={
            input.includes("@") ? "login__input--valid" : "login__input"
          }
          placeholder="Email"
          type="email"
          id="email"
          name="email"
        />
        <input
          onChange={checkInput}
          className={input.length < 8 ? "login__input" : "login__input--valid"}
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

        <button className="login__button" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
