/* eslint-disable import/no-unresolved */
import React from "react";
import "./button.scss";
import arrowLeft from "@assets/icons/arrowleft.png";

function Button({ value, className }) {
  return (
    <div className={`${className} btn`}>
      {value}
      <img src={arrowLeft} alt="" />
    </div>
  );
}

export default Button;
