/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const chatContext = createContext();

export function ChatProvider({ children }) {
  const { Provider } = chatContext;

  const [showChat, setShowChat] = useState(false);

  return <Provider value={{ showChat, setShowChat }}>{children}</Provider>;
}

export const useChat = () => useContext(chatContext);
