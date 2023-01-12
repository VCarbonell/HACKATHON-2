import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import { useFilter } from "../contexts/filterContext";
import "react-calendar/dist/Calendar.css";
import "./Calendrier.scss";
import Header from "./Header";
import timer from "../assets/icons/timer1.png";
import Button from "./Button";

function Calendrier() {
  const [range, setRange] = useState("15");
  const [rangeTow, setRangeTow] = useState("15");
  const [date, setDate] = useState();
  const { filter, setFilter } = useFilter();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRange(e.target.value);
  };
  const handleChangeTow = (e) => {
    setRangeTow(e.target.value);
  };

  const handleDateSubmit = () => {
    setFilter({
      ...filter,
      start_date: date[0].toISOString().split("T")[0],
      end_date: date[1].toISOString().split("T")[0],
    });
    navigate("/carchoice");
  };
  return (
    <div className="calendar">
      <Header value="Choose your dates" back="true" />
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange
          minDate={new Date()}
          minDetail="month"
          locale="en-GB"
        />
      </div>
      <div className="border" />
      <div className="btnheure">
        <div className="valeur">
          <img className="imgbtnclock" src={timer} alt="zz" />
          Start at {range}h am/pm
        </div>
        <input
          onChange={handleChange}
          className="range"
          value={range}
          type="range"
          min="7"
          max="23"
          step="1"
          name="time"
          id="time"
        />
        <div className="valeur">
          <img className="imgbtnclock" src={timer} alt="zz" />
          End at {rangeTow}h am/pm
        </div>
        <input
          onChange={handleChangeTow}
          className="range"
          value={rangeTow}
          type="range"
          min="7"
          max="23"
          step="1"
          name="time"
          id="time"
        />
      </div>
      <div className="btnnext">
        <Button value="NEXT" className="btn" handle={handleDateSubmit} />
      </div>
    </div>
  );
}

export default Calendrier;
