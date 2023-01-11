import Home from "@pages/Home";
import Login from "@pages/Login";
import SignIn from "@pages/SignIn";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
