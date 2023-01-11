import React from "react";
import "./filterNav.scss";
import rightArrow from "../assets/icons/arrowright.png";
import filterIcon from "../assets/icons/filter.png";

function FilterNav() {
  return (
    <div className="filterNav">
      <ul className="filterNav__list">
        <li className="filterNav__items">
          <img src={rightArrow} alt="" />
        </li>
        <li className="filterNav__items">
          <span>Choose your car</span>
        </li>
        <li className="filterNav__items">
          <img src={filterIcon} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default FilterNav;
