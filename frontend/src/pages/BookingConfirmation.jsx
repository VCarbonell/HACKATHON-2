import api from "@services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../contexts/filterContext";

function BookingConfirmation() {
  const { filter, setFilter } = useFilter();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleBook = (event) => {
    api
      .post(
        "booking/new",
        {
          email: "anitadarecka@gmail.com",
          company: "SNCF",
          car: "Volvo XC90",
          start_date: "2023-02-12",
          end_date: "2023-02-17",
          city: "Bordeaux",
          car_id: 2,
          user_id: 3,
        },
        // { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 201) {
          // navigate("/");
        }
      })
      .catch((err) => setError(err.response.data.error));
    event.preventDefault();
  };
  return (
    <div>
      <button type="button" onClick={handleBook}>
        BOOK
      </button>
    </div>
  );
}

export default BookingConfirmation;
