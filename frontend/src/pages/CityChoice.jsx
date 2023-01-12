/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import Button from "@components/Button";
import CityChoiceResult from "@components/CityChoiceResult";
import api from "@services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../contexts/filterContext";
import "./CityChoice.css";

function CityChoice() {
  const [allCity, setAllCity] = useState();
  const [allResult, setAllResult] = useState();
  const [actualSearch, setActualSearch] = useState();
  const { filter, setFilter } = useFilter();
  const navigate = useNavigate();
  const handleResearch = (name) => {
    setActualSearch(name);
    setAllResult();
    api
      .get(`/city/${name}`)
      .then((res) => setFilter({ ...filter, city: res.data[0].id }))
      .catch((err) => console.error(err));
  };
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleLocation = () => {
    let lat;
    let long;
    getCurrentPosition()
      .then((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAyLI3TwyfRzV5Ei-5tRniIJ6k2eHhSgHM`
          )
          .then((response) => response.data)
          .then((data) => {
            if (data.status === "OK") {
              for (
                let i = 0;
                i < data.results[0].address_components.length;
                i += 1
              ) {
                if (
                  data.results[0].address_components[i].types.indexOf(
                    "locality"
                  ) !== -1
                ) {
                  handleResearch(
                    data.results[0].address_components[i].long_name
                  );
                }
              }
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleFilter = (e) => {
    if (!e.target.value) {
      setAllResult();
      setActualSearch();
    } else {
      const research = e.target.value.toLowerCase();
      setActualSearch(research);
      const filterResult = allCity.filter((city) =>
        city.name.toLowerCase().includes(research)
      );
      setAllResult(filterResult);
    }
  };

  const goToNext = () => {
    navigate("/carchoice");
  };

  useEffect(() => {
    api
      .get("/city")
      .then((res) => setAllCity(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(filter);

  return (
    <div className="CityChoice">
      <input
        type="text"
        className="mainInput CityChoiceInput"
        placeholder="Derpart from..."
        onChange={handleFilter}
        value={actualSearch}
      />
      <div className="CityChoiceLocation" onClick={handleLocation} />
      {allResult && (
        <CityChoiceResult
          allResult={allResult}
          actualSearch={actualSearch}
          handleResearch={handleResearch}
        />
      )}
      <Button value="NEXT" type="button" className="btn" handle={goToNext} />
    </div>
  );
}

export default CityChoice;
