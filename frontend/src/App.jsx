/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import CompanySignUp from "@pages/CompanySignUp";
import CompanyLogin from "@pages/CompanyLogin";
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Profil from "@pages/Profil";
import Reservation from "@pages/Reservation";
import Confirmation from "@pages/Confirmation";
import Navbar from "@components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./contexts/filterContext";

import "./App.css";
import CarChoice from "@pages/CarChoice";
import "./style.scss";
import BookingConfirmation from "@pages/BookingConfirmation";
import Calendrier from "@components/Calendrier";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companysignup" element={<CompanySignUp />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <FilterProvider>
        <Routes>
          <Route path="/city" element={<CityChoice />} />
          <Route path="/carchoice" element={<CarChoice />} />
          <Route path="/calendar" element={<Calendrier />} />
          <Route path="/booking" element={<BookingConfirmation />} />
        </Routes>
      </FilterProvider>
      <Navbar />
    </div>
  );
}

export default App;
