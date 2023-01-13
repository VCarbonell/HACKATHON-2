/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import CompanySignUp from "@pages/CompanySignUp";
import CompanyProfil from "@pages/CompanyLogin";
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Profil from "@pages/Profil";
import Reservation from "@pages/Reservation";
import Confirmation from "@pages/Confirmation";
import Navbar from "@components/Navbar";
import ChatPage from "@pages/ChatPage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./contexts/filterContext";
import { useChat } from "./contexts/chatContext";
import { CompanyProvider } from "./contexts/companyContext";
import "./App.css";
import CarChoice from "@pages/CarChoice";
import "./style.scss";
import BookingConfirmation from "@pages/BookingConfirmation";
import AddCar from "@pages/addCar";
import CompanyCar from "@pages/CompanyCar";
import CompanyLogin from "@pages/CompanyLogin";
import Calendrier from "@components/Calendrier";
import NavbarCompany from "@components/NavbarCompany";

function App() {
  const { showChat } = useChat();
  return (
       <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <CompanyProvider>
        <Routes>
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/companyprofil" element={<CompanyProfil />} />
          <Route path="/companysignup" element={<CompanySignUp />} />
          <Route path="/companycar" element={<CompanyCar />} />
          <Route path="/companylogin" element={<CompanyLogin />} />
        </Routes>
      </CompanyProvider>
      <FilterProvider>
        <Routes>
          <Route path="/city" element={<CityChoice />} />
          <Route path="/carchoice" element={<CarChoice />} />
          <Route path="/calendar" element={<Calendrier />} />
          <Route path="/booking" element={<BookingConfirmation />} />
        </Routes>
      </FilterProvider>
      <Navbar />
      {showChat && <ChatPage />}
    </div>
  );
}

export default App;
