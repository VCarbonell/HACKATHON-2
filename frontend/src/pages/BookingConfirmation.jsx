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
          start_date: filter.start_date,
          end_date: filter.end_date,
          // car_id: ...,
          // user_id: ...,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
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
