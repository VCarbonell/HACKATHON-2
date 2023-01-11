import React, { useEffect } from "react";
import "./searchBar.scss";
import axios from "axios";

function SearchBar() {
  const fetchCity = () => {
    axios
      .get("https://geo.api.gouv.fr/departements/65/communes")
      .then((response) => console.log(response.data));
  };
  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <div className="searchbar">
      <label htmlFor="city">Choose a departure city</label>
      <input type="text" />
    </div>
  );
}

export default SearchBar;
