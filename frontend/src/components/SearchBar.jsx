import React, { useEffect } from "react";
import "./searchBar.scss";
import axios from "axios";

function SearchBar() {
  useEffect(() => {}, []);
  return (
    <div className="searchbar">
      <label htmlFor="city">Choose a departure city</label>
      <input type="text" />
    </div>
  );
}

export default SearchBar;
