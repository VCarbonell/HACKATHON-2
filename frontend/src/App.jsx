/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import CompanySignUp from "@pages/CompanySignUp";
import CompanyProfil from "@pages/CompanyProfil";
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Confirmation from "@pages/Confirmation";
import Navbar from "@components/Navbar";
import React from "react";
import BookingCalendar from "@pages/BookingCalendar";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./contexts/filterContext";
import { CompanyProvider } from './contexts/companyContext';
import "./App.css";
import CarChoice from "@pages/CarChoice";
import "./style.scss";
import BookingConfirmation from "@pages/BookingConfirmation";
import AddCar from '@pages/addCar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />      
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <CompanyProvider>
        <Routes>
          <Route path='/addcar' element={<AddCar/>} />
          <Route path="/companyprofil" element={<CompanyProfil />} />
          <Route path="/companysignup" element={<CompanySignUp />} />
        {/* <Route path="/companylogin" element={<CompanyLogin />} /> */}
        </Routes>
      </CompanyProvider>
      <FilterProvider>
        <Routes>
          <Route path="/city" element={<CityChoice />} />
          <Route path="/carchoice" element={<CarChoice />} />
          <Route path="/calendar" element={<BookingCalendar />} />
          <Route path="/booking" element={<BookingConfirmation />} />
        </Routes>
      </FilterProvider>
      <Navbar />
    </div>
  );
}

export default App;
