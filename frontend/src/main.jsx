import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext";
import { ChatProvider } from "./contexts/chatContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <ChatProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatProvider>
  </UserProvider>
);
