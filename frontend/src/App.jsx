/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import CompanySignUp from "@pages/CompanySignUp";
import CompanyLogin from "@pages/CompanyLogin";
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Navbar from "@components/Navbar";
import ChatPage from "@pages/ChatPage";
import React from "react";
import BookingCalendar from "@pages/BookingCalendar";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./contexts/filterContext";
import { useChat } from "./contexts/chatContext";
import "./App.css";
import CarChoice from "@pages/CarChoice";
import "./style.scss";
import BookingConfirmation from "@pages/BookingConfirmation";

function App() {
  const { showChat } = useChat();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/companysignup" element={<CompanySignUp />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
      </Routes>
      <FilterProvider>
        <Routes>
          <Route path="/city" element={<CityChoice />} />
          <Route path="/carchoice" element={<CarChoice />} />
          <Route path="/calendar" element={<BookingCalendar />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </FilterProvider>
      <Navbar />
      {showChat && <ChatPage />}
    </div>
  );
}

export default App;
