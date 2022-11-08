import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  COINCIDENT_ROUTE,
  LAGGING_ROUTE,
  LEADING_ROUTE,
} from "../../../utils/constants.js";

function NavDropDown() {
  return (
    <NavDropdown title="Индикаторы" id="offcanvasNavbarDropdown-expand-lg">
      <NavDropdown.Item as={NavLink} to={LEADING_ROUTE}>
        Опережающие индикаторы
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to={COINCIDENT_ROUTE}>
        Совпадающие индикаторы
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to={LAGGING_ROUTE}>
        Запаздывающие индикаторы
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default NavDropDown;
