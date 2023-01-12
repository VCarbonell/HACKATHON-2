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

  useEffect(() => {
    if (filter) {
      const temp = [];
      for (const key in filter) {
        temp.push(`${[key]}=${filter[key]}`);
      }
      setFilterList(temp);
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
    <Provider value={{ filter, setFilter, queryFilter, setQueryFilter }}>
      {children}
    </Provider>
  );
}

export const useFilter = () => useContext(filterContext);
