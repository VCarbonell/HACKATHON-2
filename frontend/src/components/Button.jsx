/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import React from "react";
import "./button.scss";
import arrowLeft from "@assets/icons/arrowleft.png";

function Button({ value, type, className, id, handle }) {
  return (
    <button type={type} className={className} id={id} onClick={handle}>
      <img src={arrowLeft} alt="" />
      <span>{value}</span>
      <img src={arrowLeft} alt="" />
    </button>
  );
}

export default Button;
