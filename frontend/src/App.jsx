/* eslint-disable import/no-unresolved */
import CityChoice from "@pages/CityChoice";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import React from "react";
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
