/* eslint-disable guard-for-in */
/* eslint-disable import/no-unresolved */
import { useNavigate } from "react-router-dom";
import "./Profil.css";
import Header from "@components/Header";
import { useEffect, useState } from "react";
import Button from "@components/Button";
import modif from "@assets/icons/edit.png";
import { useUser } from "../contexts/userContext";

function Profil() {
  const { userInfo, setUserInfo } = useUser();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserInfo({ id: undefined });
    window.localStorage.removeItem("userData");
    navigate("/");
  };

  useEffect(() => {
    const temp = [];
    for (const key in userInfo) {
      temp.push(`${userInfo[key]}`);
    }
    temp.shift();
    setUserData(temp);
  }, [userInfo]);

  return (
    <div className="Profil">
      <Header value="My Profil" />
      <div className="ProfilInputContainer">
        {userData &&
          userData.map((data) => (
            <div className="ProfilInput">
              <input type="text" className="mainInput" value={data} />
              <img src={modif} alt="modif" />
            </div>
          ))}
      </div>
      <Button value="Save" className="btn" />
      <Button
        value="Logout"
        className="btn"
        id="LogoutBtn"
        handle={handleLogout}
      />
    </div>
  );
}

export default Profil;
