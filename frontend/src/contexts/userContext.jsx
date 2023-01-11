import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const { Provider } = userContext;

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const localStor = JSON.parse(window.localStorage.getItem("userData"));
    if (localStor) {
      setUserInfo(localStor);
    }
  }, []);

  return <Provider value={{ userInfo, setUserInfo }}>{children}</Provider>;
}

export const useUser = () => useContext(userContext);
