import React, { useEffect, useState } from "react";
import "./companyCar.scss";
import Header from "@components/Header";
import CarCardCompany from "@components/CarCardCompany";
import carIconOrange from "@assets/icons/Vector.png";
import axios from "axios";
import allCarPicure from "@services/allCarPicture";
import NavbarCompany from "@components/NavbarCompany";
import api from "@services/api";

function CompanyCar() {
  const [cars, setCars] = useState();
  const fetchCar = () => {
    api
      .get("/car?company=SNCF")
      .then((response) => setCars(response.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCar();
  }, []);
  return (
    <div className="companyCar">
      <Header value="Our cars" back />
      {cars &&
        cars.map((car) => {
          const [carPic] = allCarPicure.filter((pic) => pic.name === car.model);
          return <CarCardCompany car={car} carPic={carPic.src} />;
        })}

      <NavbarCompany />
    </div>
  );
}

export default CompanyCar;
