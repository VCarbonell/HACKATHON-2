/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export function FilterProvider({ children }) {
  const { Provider } = filterContext;

  const [filter, setFilter] = useState({});

  return <Provider value={{ filter, setFilter }}>{children}</Provider>;
}

export const useFilter = () => useContext(filterContext);
