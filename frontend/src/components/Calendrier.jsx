import { useState } from "react";
import Calendar from "react-calendar";
import { useFilter } from "../contexts/filterContext";
import "react-calendar/dist/Calendar.css";
// import "./Calendrier.scss";

function Calendrier() {
  const [date, setDate] = useState();
  const { filter, setFilter } = useFilter();
  const handleDateSubmit = () => {
    setFilter({
      ...filter,
      start_date: date[0].toISOString(),
      end_date: date[1].toISOString(),
    });
  };
  return (
    <div className="">
      <div className="calendar__container__content">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange
          minDate={new Date()}
          maxDate={new Date(2023, 12, 31)}
        />
      </div>
      {date && (
        <p className="text-center">
          <span className="bold" style={{ color: "white" }}>
            Start: {date[0].toDateString()}
          </span>
          &nbsp;|&nbsp;
          <span className="bold" style={{ color: "white" }}>
            End: {date[1].toDateString()}
          </span>
        </p>
      )}
      <button type="button" onClick={handleDateSubmit}>
        Next
      </button>
    </div>
  );
}

export default Calendrier;
