import React from "react";
import { Accordion } from "react-bootstrap";
import SideBarItem from "./SideBarItem.jsx";

const SideBar = (props) => {
  const { path, subjects } = props;
  return (
    <Accordion defaultActiveKey="0" className="p-0" flush>
      {subjects.map((continent) => (
        <Accordion.Item eventKey={continent.id} key={continent.id}>
          <Accordion.Header>
            <span className="fs-5">{continent.continentName}</span>
          </Accordion.Header>
          {continent.countries.map((country) => (
            <Accordion.Body key={country.id} className="p-0">
              <SideBarItem country={country} path={path} />
            </Accordion.Body>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SideBar;
