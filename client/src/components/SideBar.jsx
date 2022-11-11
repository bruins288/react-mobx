import React from "react";
import { Accordion } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../index.js";
import { useLocation } from "react-router-dom";
import SideBarItem from "./sidebarlist/SideBarItem.jsx";
import { observer } from "mobx-react-lite";

const SideBarHeader = observer(() => {
  const { countryStore } = useContext(Context);
  const location = useLocation();

  let path = location.pathname.split("/")[1];
  return (
    <Accordion defaultActiveKey="0" className="p-0" flush>
      {countryStore.Continent.map((continent) => (
        <Accordion.Item eventKey={continent.id} key={continent.id}>
          <Accordion.Header>
            <div className="fs-5">{continent.continentName}</div>
          </Accordion.Header>
          {continent.Country.map((country) => (
            <Accordion.Body key={country.id} className="p-0">
              <SideBarItem country={country} path={path} />
            </Accordion.Body>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  );
});

export default SideBarHeader;
