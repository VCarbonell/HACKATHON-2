/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./carCard.scss";
import carIcon from "../assets/icons/car.png";
import companyIcon from "../assets/icons/companyIcon.png";
import Button from "./Button";

function CarCard({ car, carPic }) {
  const [big, setBig] = useState(false);
  const expend = () => {
    setBig(!big);
  };
  return (
    <div onClick={expend} className={big ? "carCard--big" : "carCard"}>
      <img
        className={big ? "carCard--big__bg-img" : "carCard__bg-img"}
        src={carPic}
        alt=""
      />
      <div className="carCard__make">
        <img src={carIcon} alt="" />
        <span>{car.model}</span>
      </div>
      <div className="carCard__price">
        <span>{car.price}</span>/day
      </div>

      <div className={big ? "carCard--big__company" : "carCard__company"}>
        <img src={companyIcon} alt="" />
        <span>{car.company}</span>
      </div>
      <div className="carCard__description">
        <h3 className="carCard__model">{car.model}</h3>
        <span className="carCar__year">Year: {car.year}</span>
        <span className="carCar__milleage">Milleage: {car.mileage * 1000}</span>
        <span className="carCar__fuel">Fuel: {car.fuel}</span>
        <span className="carCar__seats">Seats: {car.number_of_seats}</span>
      </div>
      <Button className="btn" type="button" value="Book now" />
    </div>
  );
}

export default CarCard;
