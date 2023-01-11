import Navbar from "@components/Navbar";
import React from "react";
import Button from "@components/button";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Button value="GET STARTED" />
      <Navbar />
    </div>
  );
}

export default Home;
