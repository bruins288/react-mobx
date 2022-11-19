import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBarItem = (props) => {
  const { country, path } = props;
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Link
        key={country.id}
        as={NavLink}
        to={path + `/${country.countryShortName}`}
      >
        {country.countryName}
      </Nav.Link>
    </Nav>
  );
};

export default SideBarItem;
