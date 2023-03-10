/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbarCompany.scss";
import homeblack from "@assets/icons/homeblack.png";
import addcircle from "@assets/icons/addcircle.png";
import account from "@assets/icons/account.png";
import message from "@assets/icons/message.png";
import { useUser } from "../contexts/userContext";
import { useChat } from "../contexts/chatContext";

function NavbarCompany() {
  const { userInfo } = useUser();
  const navigate = useNavigate();
  const { showChat, setShowChat } = useChat();

  return (
    <div className="navbarCompany">
      <ul className="navbarCompany__list">
        <NavLink to="/companycar">
          <li className="navbarCompany__items">
            <img src={homeblack} alt="" className="navbarCompany__icons" />
          </li>
        </NavLink>
        <NavLink to="/addcar">
          <li className="navbarCompany__items">
            <img src={addcircle} alt="" className="navbarCompany__icons" />
          </li>
        </NavLink>
        <NavLink to={userInfo.id === undefined ? "/login" : "/profil"}>
          <li className="navbarCompany__items small">
            <img src={account} alt="" className="navbarCompany__icons" />
          </li>
        </NavLink>
        <li className="navbarCompany__items">
          <img
            src={message}
            alt=""
            className="navbarCompany__icons"
            onClick={() => setShowChat(!showChat)}
          />
        </li>
      </ul>
    </div>
  );
}

export default NavbarCompany;
