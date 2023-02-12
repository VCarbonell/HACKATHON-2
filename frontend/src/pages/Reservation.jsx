/* eslint-disable import/no-unresolved */
import "./Reservation.css";
import Header from "@components/Header";
import api from "@services/api";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/userContext";

function Reservation() {
  const [allResa, setAllResa] = useState();
  const { userInfo } = useUser();

  useEffect(() => {
    if (userInfo.id) {
      api
        .get(`/booking/${userInfo.id}`)
        .then((res) => setAllResa(res.data))
        .catch((err) => console.error(err));
    }
  }, [userInfo]);

  return (
    <div className="Reservation">
      <Header value="Reservations" />
      <div className="ReservationsContainer">
        {allResa &&
          allResa.map((resa) => (
            <div className="ReservationOne">
              <p>
                {resa.model} - {resa.name_company}
              </p>
              <p id="ReservationDate">
                {resa.start_date.split("-").join("/")} -{" "}
                {resa.end_date.split("-").join("/")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Reservation;
