/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const companyContext = createContext();

export function CompanyProvider({ children }) {
  const { Provider } = companyContext;

  const [company, setCompany] = useState({});

  return <Provider value={{ company, setCompany }}>{children}</Provider>;
}

export const useCompany = () => useContext(companyContext);
