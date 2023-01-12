import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendrier.scss";
import Singlerange from "./SingleRange";

function Calendrier() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendar">
      <div className="title">
        <h1>CHOOSE YOUR DATES</h1>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange
          minDate={new Date()}
          minDetail="month"
        />
      </div>
    </div>
  );
}

export default Calendrier;
