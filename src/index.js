import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import UserContextProvider from "./Contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
