import React from "react";
import { useContext } from "react";
import { Accordion, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "../index.js";

const SideBar = () => {
  const { menu } = useContext(Context);
  const location = useLocation();

  let path = location.pathname.split("/")[1];

  let continent = menu.Continent.map((continent) => {
    return (
      <Accordion.Item eventKey={continent.id} key={continent.id}>
        <Accordion.Header>{continent.continentName}</Accordion.Header>
        {continent.Country.map((country) => (
          <Accordion.Body key={country.id}>
            <Nav variant="pills" className="flex-column">
              <Nav.Link
                key={country.id}
                as={NavLink}
                to={path + `/${country.countryShortName}`}
              >
                {country.countryName}
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        ))}
      </Accordion.Item>
    );
  });
  return (
    <Accordion defaultActiveKey="0" className="p-1">
      {continent}
    </Accordion>
  );
};

export default SideBar;
