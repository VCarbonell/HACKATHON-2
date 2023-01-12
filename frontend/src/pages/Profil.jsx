/* eslint-disable guard-for-in */
/* eslint-disable import/no-unresolved */
import "./Profil.css";
import Header from "@components/Header";
import { useEffect, useState } from "react";
import Button from "@components/Button";
import modif from "@assets/icons/edit.png";
import { useUser } from "../contexts/userContext";
import api from "@services/api";

function Profil() {
  const { userInfo } = useUser();
  const [userData, setUserData] = useState();

  const handleLogout = () => {
    api
      .get("/users/logout")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
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
