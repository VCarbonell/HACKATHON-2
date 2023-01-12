/* eslint-disable import/no-unresolved */
import CarCard from "@components/carCard";
import FilterNav from "@components/FilterNav";
import allCarPicure from "@services/allCarPicture";
import api from "@services/api";
import React, { useState, useEffect } from "react";
import { useFilter } from "../contexts/filterContext";
import "./carChoice.scss";

function CarChoice() {
  const [allCar, setAllCar] = useState();
  const { queryFilter, setQueryFilter } = useFilter();

  useEffect(() => {
    if (queryFilter.length > 0 || !allCar) {
      api
        .get(`/car${queryFilter}`)
        .then((res) => {
          setAllCar(res.data);
          setQueryFilter("");
        })
        .catch((err) => console.error(err));
    }
  }, [queryFilter]);

  return (
    <div className="carChoice">
      <FilterNav />
      {allCar &&
        allCar.map((car) => {
          const [carPic] = allCarPicure.filter((pic) => pic.name === car.model);
          return <CarCard car={car} carPic={carPic.src} />;
        })}
    </div>
  );
}

export default CarChoice;
