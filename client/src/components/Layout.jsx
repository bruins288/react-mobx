import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

function Layout() {
  return (
    <Container fluid>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

export default Layout;
