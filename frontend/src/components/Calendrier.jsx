import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./Calendrier.scss";

function Calendrier() {
  const [date, setDate] = useState();

  return (
    <div className="">
      <div className="calendar__container__content">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          minDate={new Date()}
          maxDate={new Date(2023, 12, 31)}
        />
      </div>
      {date && (
        <p className="text-center">
          <span className="bold" style={{ color: "white" }}>Start: {date[0].toDateString()}</span>
          &nbsp;|&nbsp;
          <span className="bold" style={{ color: "white" }}>End: {date[1].toDateString()}</span>
        </p>
      )}
    </div>
  );
}

export default Calendrier;
