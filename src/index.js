import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from './components/Main/Main'
import { globalContext as GlobalContext } from "./components/contexts/globalContext";
import { useLocalStorage } from "./hooks/useLocalStorage";


function General() {
  const initialState = {
    list: [],
  };

  const [state, dispatch] = useLocalStorage("list", initialState);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContext.Provider value={{ state, dispatch }}>
    <App />
    <Main/>
  </GlobalContext.Provider>
    
);
}
export default General;