import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import UserStore from "./store/UserStore.js";
import GlobalSubjectStore from "./store/GlobalSubjectStore.js";
import MarketKeyStore from "./store/market/MarketKeyStore.js";
import LeadingKeyStore from "./store/leading/LeadingKeyStore.js";
import CoincidentKeyStore from "./store/coincident/CoincidentKeyStore.js";
import LaggingKeyStore from "./store/lagging/LaggingKeyStore.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        userStore: new UserStore(),
        globalSubjectStore: new GlobalSubjectStore(),
        marketKeyStore: new MarketKeyStore(),
        leadingKeyStore: new LeadingKeyStore(),
        coincidentKeyStore: new CoincidentKeyStore(),
        laggingKeyStore: new LaggingKeyStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
