/* eslint-disable array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const filterContext = createContext();

export function FilterProvider({ children }) {
  const { Provider } = filterContext;

  const [filter, setFilter] = useState({});
  const [filterList, setFilterList] = useState();
  const [queryFilter, setQueryFilter] = useState("");
  const [actualCar, setActualCar] = useState();
  useEffect(() => {
    if (filter) {
      const temp = [];
      for (const key in filter) {
        if (key !== "start_date" && key !== "end_date") {
          temp.push(`${[key]}=${filter[key]}`);
        }
      }
      setFilterList(temp);
      setQueryFilter("");
    }
  }, [filter]);

  useEffect(() => {
    if (filterList) {
      const temp = [];
      filterList.map((filtre, index) => {
        if (queryFilter.length === 0 && index === 0) {
          temp.push(`?${filtre}`);
        } else {
          temp.push(`&${filtre}`);
        }
      });
      setQueryFilter(temp.join(""));
    }
  }, [filterList]);
  return (
    <Provider
      value={{
        filter,
        setFilter,
        queryFilter,
        setQueryFilter,
        actualCar,
        setActualCar,
      }}
    >
      {children}
    </Provider>
  );
}

export const useFilter = () => useContext(filterContext);
