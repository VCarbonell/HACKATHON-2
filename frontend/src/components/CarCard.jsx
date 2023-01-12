import React, { useEffect } from "react";
import "./carCard.scss";
import carphoto from "../assets/photo/vehicules/Tesla_Model_Y.png";
import carIcon from "../assets/icons/car.png";
import companyIcon from "../assets/icons/companyIcon.png";

function CarCard() {
  return (
    <div className="carCard">
      <img className="carCard__bg-img" src={carphoto} alt="" />
      <div className="carCard__make">
        <img src={carIcon} alt="" />
        <span>ford focus</span>
      </div>
      <div className="carCard__price">35$/day</div>
      <div className="carCard__company">
        <img src={companyIcon} alt="" />
        <span>SNCF</span>
      </div>
    </div>
  );
}

export default CarCard;
