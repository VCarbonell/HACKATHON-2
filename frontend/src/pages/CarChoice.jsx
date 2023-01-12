import CarCard from "@components/carCard";
import FilterNav from "@components/FilterNav";
import React from "react";
import "./carChoice.scss";

function CarChoice() {
  return (
    <div className="carChoice">
      <FilterNav />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}

export default CarChoice;
