import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Globalstyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
