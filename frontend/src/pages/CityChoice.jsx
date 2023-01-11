/* eslint-disable import/no-unresolved */
import CityChoiceResult from "@components/CityChoiceResult";
import api from "@services/api";
import { useEffect, useState } from "react";
import "./CityChoice.css";

function CityChoice() {
  const [allCity, setAllCity] = useState();
  const [allResult, setAllResult] = useState();
  const [actualSearch, setActualSearch] = useState();

  const handleFilter = (e) => {
    if (!e.target.value) {
      setAllResult();
    } else {
      const research = e.target.value.toLowerCase();
      setActualSearch(research);
      const filterResult = allCity.filter((city) =>
        city.name.toLowerCase().includes(research)
      );
      setAllResult(filterResult);
    }
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
      {allResult && (
        <CityChoiceResult allResult={allResult} actualSearch={actualSearch} />
      )}
    </div>
  );
}

export default CityChoice;
