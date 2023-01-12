/* eslint-disable import/no-unresolved */
import CarCard from "@components/CarCardCompany";
import FilterNav from "@components/FilterNav";
import React from "react";
import "./carChoice.scss";
import car from '@assets/icons/car.png';

function CarChoice() {
  return (
    <div className="carChoice">
      <FilterNav />
      <CarCard isCompany={false} src={car} />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}

export default CarChoice;
