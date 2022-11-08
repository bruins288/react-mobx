import React from "react";
import { Offcanvas } from "react-bootstrap";

function NavbarOffcanvasHeader() {
  return (
    <Offcanvas.Header closeButton>
      <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
        Меню
      </Offcanvas.Title>
    </Offcanvas.Header>
  );
}

export default NavbarOffcanvasHeader;
