import React, { useEffect, useState } from "react";
import "./carCardCompany.scss";
import carphoto from "../assets/photo/vehicules/Tesla_Model_Y.png";
import companyIcon from "../assets/icons/companyIcon.png";

import Button from "./Button";

function CarCard({ carPic, car }) {
  const [big, setBig] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const turnAvailable = () => {
    setIsAvailable(!isAvailable);
  };
  const expend = () => {
    setBig(!big);
  };
  return (
    <div
      onClick={expend}
      style={{ opacity: !isAvailable && ".4" }}
      className={big ? "carCard--big" : "carCard"}
    >
      <img
        className={big ? "carCard--big__bg-img" : "carCard__bg-img"}
        src={carPic}
        style={{ transform: !isAvailable && "translateX(250px)" }}
        alt=""
      />
      <div className="carCard__make">
        <img src={carphoto} alt="" />
        <span>ford focus</span>
      </div>
      <div className="carCard__price">
        <span>{car.price}</span>/day
      </div>

      <div className={big ? "carCard--big__company" : "carCard__company"}>
        <img src={companyIcon} alt="" />

        <label className="carCard__switch">
          <input onClick={turnAvailable} type="checkbox" />
          <span className="carCard__slider" />
        </label>
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
