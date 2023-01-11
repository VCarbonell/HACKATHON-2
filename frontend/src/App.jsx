import CompanySignUp from "@pages/CompanySignUp";
import CompanyLogin from "@pages/CompanyLogin";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import React from "react";
import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
