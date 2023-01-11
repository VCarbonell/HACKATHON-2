/* eslint-disable import/no-unresolved */
import api from "@services/api";
import { useEffect, useState } from "react";
import { useFilter } from "../contexts/filterContext";
import "./CityChoice.css";

function CityChoice() {
  const { filter, setFilter } = useFilter();
  const [allCity, setAllCity] = useState();
  const [allResult, setAllResult] = useState();

  const handleFilter = (e) => {
    const research = e.target.value.toLowerCase();
    const filterResult = allCity.filter((city) =>
      city.name.toLowerCase().includes(research)
    );
    setAllResult(filterResult);
  };

  useEffect(() => {
    api
      .get("/city")
      .then((res) => setAllCity(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="CityChoice">
      <input type="text" className="CityChoiceInput" onChange={handleFilter} />
    </div>
  );
}

export default CityChoice;
