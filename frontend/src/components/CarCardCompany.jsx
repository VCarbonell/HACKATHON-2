import React, { useEffect, useState } from "react";
import "./carCardCompany.scss";
import carphoto from "../assets/photo/vehicules/Tesla_Model_Y.png";
import companyIcon from "../assets/icons/companyIcon.png";

import Button from "./Button";

function CarCard({ src, isCompany }) {
  const [big, setBig] = useState(false);
  const expend = () => {
    setBig(!big);
  };
  return (
    <div onClick={expend} className={big ? "carCard--big" : "carCard"}>
      <img
        className={big ? "carCard--big__bg-img" : "carCard__bg-img"}
        src={carphoto}
        alt=""
      />
      <div className="carCard__make">
        <img src={src} alt="" />
        <span>ford focus</span>
      </div>
      <div className="carCard__price">
        <span>35$</span>/day
      </div>

      <div className={big ? "carCard--big__company" : "carCard__company"}>
        <img src={isCompany ? null : companyIcon} alt="" />
        {isCompany ?

          <label className="carCard__switch">
            <input type="checkbox" />
            <span className="carCard__slider" />
          </label>

        :
        <span>SNCF</span>
        }
      </div>
      <div className="carCard__description">
        <h3 className="carCard__model">Ford de merde compact</h3>
        <span className="carCar__year">Year: 1998</span>
        <span className="carCar__milleage">Milleage: 10000km</span>
        <span className="carCar__fuel">Fuel: Gasolina</span>
        <span className="carCar__seats">Seats: 5</span>
      </div>
      <Button className="btn" type="button" value="Book now" />
    </div>
  );
}

export default CarCard;
