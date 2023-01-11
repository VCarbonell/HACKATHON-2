/* eslint-disable import/no-unresolved */
import CompanySignUp from "@pages/CompanySignUp";
import CompanyLogin from "@pages/CompanyLogin";
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import React from "react";
import BookingCalendar from "@pages/BookingCalendar";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./contexts/filterContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companysignup" element={<CompanySignUp />} />
        <Route path="/calendar" element={<BookingCalendar />} />
      </Routes>
      <FilterProvider>
        <Routes>
          <Route path="/city" element={<CityChoice />} />
        </Routes>
      </FilterProvider>
    </div>
  );
}

export default App;
