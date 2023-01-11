/* eslint-disable import/no-unresolved */
import React from "react";
import Button from "@components/button";
import { NavLink } from "react-router-dom";
import "./home.scss";
import logo from "../assets/icons/logo.png";

function Home() {
  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="logo" />
      <h1 className="home__title">go for a ride.</h1>
      <NavLink to="/city">
        <Button className="btn" type="button" value="GET STARTED" />
      </NavLink>
    </div>
  );
}

export default Home;
