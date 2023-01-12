/* eslint-disable react/prop-types */
import "./Header.css";
import rightArrow from "../assets/icons/arrowright.png";

function Header({ value, back }) {
  return (
    <div className="Header">
      <div>
        {back && <img src={rightArrow} alt="goBack" />}
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default Header;
