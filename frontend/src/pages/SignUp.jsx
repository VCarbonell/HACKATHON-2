/* eslint-disable import/no-unresolved */
import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";
import api from "@services/api";
import Button from "@components/Button";
import logo from "@assets/icons/logo.png";

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    licence_number: "",
    adress: "",
    password: "",
    passwordConfirm: "",
    company_code: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    if (
      formData.passwordConfirm &&
      formData.password !== formData.passwordConfirm
    ) {
      setError(
        "Your confirmation password does not match the password you entered."
      );
    } else {
      setError("");
    }
  }, [formData]);
  const handleSubmit = (event) => {
    if (error === "") {
      api
        .post(
          "/users/newClient",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            navigate("/login");
          }
        })
        .catch((err) => setError(err.response.data.error));
    }
    event.preventDefault();
  };
  return (
    <div className="SignUp">
      <img src={logo} alt="logo" className="SignUpLogo" />
      <div className="SignUpForm">
        <input
          className="mainInput"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Firstname"
        />
        <input
          className="mainInput"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Lastname"
        />
        <input
          className="mainInput"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="mainInput"
          type="text"
          id="licence_number"
          name="licence_number"
          value={formData.licence_number}
          onChange={handleChange}
          placeholder="Licence number"
        />
        <input
          className="mainInput"
          type="text"
          id="adress"
          name="adress"
          value={formData.adress}
          onChange={handleChange}
          placeholder="Adress"
        />
        <div className="">
          <input
            className="mainInput"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />{" "}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=""
          >
            {showPassword ? "don't show" : "show"}
          </button>
        </div>
        <div className="">
          <input
            className="mainInput"
            type={showConfirmPassword ? "text" : "password"}
            id="password-confirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className=""
          >
            {showConfirmPassword ? "don't show" : "show"}
          </button>
        </div>
        <input
          className="mainInput"
          type="text"
          id="company_code"
          name="company_code"
          value={formData.company_code}
          onChange={handleChange}
          placeholder="Partner company code (optional)"
        />
        <p className="">{error}</p>
        <Button value="SIGN UP" handle={handleSubmit} className="btn" />
        <p className="">
          Already have an account?{" "}
          <span className="">
            <Link to="/login" className="">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
