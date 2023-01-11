import React from "react";
import "./button.scss";
import arrowLeft from "@assets/icons/arrowleft.png";

function Button({ value, type, className }) {
  return (
    <button type={type} className={className}>
      <img src={arrowLeft} alt="" />
      <span>{value}</span>
      <img src={arrowLeft} alt="" />
    </button>
  );
}

export default Button;
