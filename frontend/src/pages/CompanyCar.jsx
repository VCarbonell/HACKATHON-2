import React from "react";
import "./companyCar.scss";
import Header from "@components/Header";
import CarCardCompany from "@components/CarCardCompany";
import carIconOrange from "@assets/icons/Vector.png";
import axios from "axios";
import allCarPicure from "@services/allCarPicture";
import { useEffect } from "react";
import { useState } from "react";
const CompanyCar = () => {
  const [cars, setCars] = useState();
  const fetchCar = () => {
    axios
      .get("http://localhost:8000/api/car?company=SNCF")
      .then((response) => setCars(response.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCar();
  }, []);
  return (
    <div className="companyCar">
      <Header value="Our cars" back={true} />
      {cars &&
        cars.map((car) => {
          const [carPic] = allCarPicure.filter((pic) => pic.name === car.model);
          return <CarCardCompany car={car} carPic={carPic.src} />;
        })}
    </div>
  );
};

export default CompanyCar;
