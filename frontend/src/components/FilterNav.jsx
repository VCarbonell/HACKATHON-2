/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./filterNav.scss";

import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import rightArrow from "../assets/icons/arrowright.png";
import filterIcon from "../assets/icons/filter.png";
import Button from "./Button";
import { useFilter } from "../contexts/filterContext";

function FilterNav() {
  const { filter, setFilter } = useFilter();
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [range, setRange] = useState("20");
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    fuel: "",
    seats: "",
  });
  const handleSubmit = (e) => {
    closeFilter();
    e.preventDefault();

    setFilter({ ...filter, ...formData });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      setRange(e.target.value);
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  //   0;
  // 0
  const handleClick = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.innerHTML,
      };
    });
  };

  const openFilter = () => {
    const openTl = gsap.timeline();
    setIsFilterOpen(!isFilterOpen);
    openTl
      .to(".filterNav__panel", {
        height: "100vh",
        paddingTop: "2rem",
        duration: 1.3,
        ease: "Expo.easeInOut",
      })
      .to(
        ".filterNav__primeDeal",
        {
          opacity: 1,
        },
        "-=.55"
      )
      .to(
        ".filterNav__modelType",
        {
          opacity: 1,
        },
        "< .1"
      )
      .to(
        ".filterNav__price",
        {
          opacity: 1,
        },
        "< .1"
      )
      .to(
        ".filterNav__fuel",
        {
          opacity: 1,
        },
        "< .1"
      )
      .to(
        ".filterNav__seats",
        {
          opacity: 1,
        },
        "<.1"
      )
      .to(
        ".btn",
        {
          opacity: 1,
        },
        "<.1"
      );
  };
  const closeFilter = () => {
    const closeTl = gsap.timeline();

    setIsFilterOpen(!isFilterOpen);
    closeTl
      .to(
        ".filterNav__primeDeal",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".filterNav__modelType",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".filterNav__price",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".filterNav__fuel",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(
        ".filterNav__seats",
        {
          opacity: 0,
        },
        "-=.5"
      )
      .to(".btn", {
        opacity: 0,
      })
      .to(
        ".filterNav__panel",
        {
          height: 0,
          paddingTop: 0,
          duration: 1.3,
          ease: "Expo.easeInOut",
        },
        "-=.5"
      );
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="filterNav">
      <ul className="filterNav__list">
        <li onClick={goBack} className="filterNav__items">
          <img src={rightArrow} alt="" />
        </li>
        <li className="filterNav__items">
          <span>Choose your car</span>
        </li>
        <li
          onClick={isFilterOpen ? closeFilter : openFilter}
          className="filterNav__items"
        >
          <img src={filterIcon} alt="" />
        </li>
      </ul>
      <div className="filterNav__panel">
        <div className="filterNav__primeDeal">
          <span className="filterNav__subTitle">Prime deal</span>

          <label className="filterNav__switch">
            <input type="checkbox" />
            <span className="filterNav__slider" />
          </label>
        </div>
        <div className="filterNav__modelType">
          <span className="filterNav__subTitle">Model type</span>
          <div className="filterNav__wrap">
            <button
              name="type"
              onClick={handleClick}
              className={`filterNav__btn ${
                formData.type === "Sedan" ? "active" : ""
              }`}
            >
              Sedan
            </button>
            <button
              name="type"
              onClick={handleClick}
              className={`filterNav__btn ${
                formData.type === "Convertible" ? "active" : ""
              }`}
            >
              Convertible
            </button>
            <button
              name="type"
              onClick={handleClick}
              className={`filterNav__btn ${
                formData.type === "SUV" ? "active" : ""
              }`}
            >
              SUV
            </button>
            <button
              name="type"
              onClick={handleClick}
              className={`filterNav__btn ${
                formData.type === "Truck" ? "active" : ""
              }`}
            >
              Truck
            </button>
            <button
              name="type"
              onClick={handleClick}
              className={`filterNav__btn ${
                formData.type === "Coupe" ? "active" : ""
              }`}
            >
              Coupe
            </button>
          </div>
        </div>
        <div className="filterNav__price">
          <span className="filterNav__subTitle">{range}$/day</span>
          <input
            onChange={handleChange}
            className="range"
            value={range}
            type="range"
            min="10"
            max="150"
            step="5"
            name="price"
            id="price"
          />
        </div>
        <div className="filterNav__fuel">
          <span className="filterNav__subTitle">Fuel</span>
          <div className="filterNav__wrap">
            <button
              onClick={handleClick}
              name="fuel"
              className={`filterNav__btn ${
                formData.fuel === "Gasoline" ? "active" : ""
              }`}
            >
              Gasoline
            </button>
            <button
              onClick={handleClick}
              name="fuel"
              className={`filterNav__btn ${
                formData.fuel === "Electric" ? "active" : ""
              }`}
            >
              Electric
            </button>
            <button
              onClick={handleClick}
              name="fuel"
              className={`filterNav__btn ${
                formData.fuel === "Diesel" ? "active" : ""
              }`}
            >
              Diesel
            </button>
          </div>
        </div>
        <div className="filterNav__seats">
          <span className="filterNav__subTitle">seats</span>
          <div className="filterNav__wrap">
            <button
              onClick={handleClick}
              name="seats"
              className={`filterNav__btn ${
                formData.seats === "4" ? "active" : ""
              }`}
            >
              4
            </button>
            <button
              onClick={handleClick}
              name="seats"
              className={`filterNav__btn ${
                formData.seats === "5" ? "active" : ""
              }`}
            >
              5
            </button>
            <button
              onClick={handleClick}
              name="seats"
              className={`filterNav__btn ${
                formData.seats === "6" ? "active" : ""
              }`}
            >
              6
            </button>
            <button
              onClick={handleClick}
              name="seats"
              className={`filterNav__btn ${
                formData.seats === "7" ? "active" : ""
              }`}
            >
              7
            </button>
            <button
              onClick={handleClick}
              name="seats"
              className={`filterNav__btn ${
                formData.seats === "8" ? "active" : ""
              }`}
            >
              8
            </button>
          </div>
        </div>

        <Button
          handle={handleSubmit}
          value="Filter"
          className="btn"
          type="button"
        />
      </div>
    </div>
  );
}

export default FilterNav;
