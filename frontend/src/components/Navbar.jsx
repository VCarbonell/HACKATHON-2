import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";
import home from "@assets/icons/home2.png";
import calendar from "@assets/icons/calendar.png";
import account from "@assets/icons/account.png";
import message from "@assets/icons/message.png";
import { useUser } from "../contexts/userContext";

function Navbar() {
  const { userInfo } = useUser();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <NavLink to="/">
          <li className="navbar__items">
            <img src={home} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <li className="navbar__items">
          <img src={calendar} alt="" className="navbar__icons" />
        </li>
        <NavLink to={userInfo.id === undefined ? "/login" : "/profil"}>
          <li className="navbar__items small">
            <img src={account} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <li className="navbar__items">
          <img src={message} alt="" className="navbar__icons" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
