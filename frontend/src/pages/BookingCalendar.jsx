/* eslint-disable import/no-unresolved */
import Calendrier from "@components/Calendrier";
import api from "@services/api";
import { useEffect, useState } from "react";
import "./BookingCalendar.css";

function BookingCalendar() {
  return (
    <div className="calendar__page">
      <div className="calendar__header">Choose your dates</div>
      <div className="calendar">
        <Calendrier />
      </div>
    </div>
  );
}

export default BookingCalendar;
