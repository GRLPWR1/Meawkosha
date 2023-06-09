import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/UserForm/App";
import Main from './components/Main/Main'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Main/>
  </React.StrictMode>
);
