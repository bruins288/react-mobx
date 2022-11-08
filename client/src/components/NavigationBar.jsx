import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { HOME_ROUTE } from "../utils/constants.js";
import classes from "./NavigationBar.module.css";

import NavbarOffcanvasHeader from "./menuitem/NavbarOffcanvasHeader.jsx";
import NavbarOffcanvasBody from "./menuitem/NavbarOffcanvasBody.jsx";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={HOME_ROUTE} className={classes.navigationBar}>
          Макроэкономика
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <NavbarOffcanvasHeader />
          <NavbarOffcanvasBody />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
