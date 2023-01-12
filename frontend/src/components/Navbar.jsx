import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import home from "@assets/icons/home2.png";
import calendar from "@assets/icons/calendar.png";
import account from "@assets/icons/account.png";
import message from "@assets/icons/message.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <NavLink to="/">
          <li className="navbar__items">
            <img src={home} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <NavLink to="/reservation">
          <li className="navbar__items">
            <img src={calendar} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <NavLink to="/login">
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
