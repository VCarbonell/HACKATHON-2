import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signUp.scss";
import axios from "axios";
import Navbar from "@components/Navbar";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
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
      axios
        .post(
          "http://localhost:8000/api/users/newClient",
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
    <div className="">
      <form onSubmit={handleSubmit}>
        <label className="" htmlFor="Email">
          Email:
          <input
            className=""
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          &nbsp;
        </label>
        <label className="" htmlFor="password">
          Password:
          <div className="">
            <input
              className=""
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />{" "}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=""
            >
              {showPassword ? "don't show" : "show"}
            </button>
          </div>
          &nbsp;
        </label>
        <label className="" htmlFor="password-confirm">
          Confirm password:
          <div className="">
            <input
              className=""
              type={showConfirmPassword ? "text" : "password"}
              id="password-confirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className=""
            >
              {showConfirmPassword ? "don't show" : "show"}
            </button>
          </div>
          &nbsp;
        </label>
        <p className="">{error}</p>
        <input className="" type="submit" value="Create account" />
      </form>
      <p className="">
        Already have an account?{" "}
        <span className="">
          <Link to="/" className="">
            Login
          </Link>
        </span>
      </p>
      <Navbar />
    </div>
  );
}

export default SignUp;
