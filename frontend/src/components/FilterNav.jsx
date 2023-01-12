import React, { useState } from "react";
import "./filterNav.scss";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import rightArrow from "../assets/icons/arrowright.png";
import filterIcon from "../assets/icons/filter.png";
import Button from "./Button";

function FilterNav() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [range, setRange] = useState("20");
  const [formData, setFormData] = useState({
    type: "",
    price: "",
    fuel: "",
    seats: "",
  });
  const test = (e) => {
    console.log(e.target.name);
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

  const handClick = (e) => {
    setFormData((prevFormData) => {
      setRange(e.target.value);
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
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
            <button className="filterNav__btn">Sedan</button>
            <button className="filterNav__btn">Convertible</button>
            <button className="filterNav__btn">SUV</button>
            <button className="filterNav__btn">Truck</button>
            <button className="filterNav__btn">Coupe</button>
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
            <button onClick={test} name="fuel" className="filterNav__btn">
              gasoline
            </button>
            <button name="fuel" className="filterNav__btn">
              electric
            </button>
            <button name="fuel" className="filterNav__btn">
              Diesel
            </button>
          </div>
        </div>
        <div className="filterNav__seats">
          <span className="filterNav__subTitle">seats</span>
          <div className="filterNav__wrap">
            <button name="seats" className="filterNav__btn">
              4
            </button>
            <button name="seats" className="filterNav__btn">
              5
            </button>
            <button name="seats" className="filterNav__btn">
              6
            </button>
            <button name="seats" className="filterNav__btn">
              7
            </button>
            <button name="seats" className="filterNav__btn">
              8
            </button>
          </div>
        </div>
        <Button value="Filter" className="btn" type="button" />
      </div>
    </div>
  );
}

export default FilterNav;
