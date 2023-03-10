/* eslint-disable react/prop-types */
import "./Header.css";
import { useNavigate } from "react-router-dom";
import rightArrow from "../assets/icons/arrowright.png";

function Header({ value, back }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="Header">
      <div>
        {back && <img onClick={goBack} src={rightArrow} alt="goBack" />}
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default Header;
