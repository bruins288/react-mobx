import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import UserStore from "./store/UserStore.js";
import GlobalSubjectStore from "./store/GlobalSubjectStore.js";
import MarketStore from "./store/MarketStore.js";
import LeadingStore from "./store/LeadingStore.js";
import CoincidentStore from "./store/CoincidentStore.js";
import LaggingStore from "./store/LaggingStore.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        userStore: new UserStore(),
        globalSubjectStore: new GlobalSubjectStore(),
        marketStore: new MarketStore(),
        leadingStore: new LeadingStore(),
        coincidentStore: new CoincidentStore(),
        laggingStore: new LaggingStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
