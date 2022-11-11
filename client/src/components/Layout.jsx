import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar.jsx";
import { pathSideBar } from "../utils/pathSideBar.js";

function Layout() {
  const location = useLocation();
  const isPath = pathSideBar.some((router) => location.pathname === router);

  return (
    <Container fluid>
      <NavigationBar />
      {isPath ? (
        <Outlet />
      ) : (
        <Row>
          <Col lg={2} className="pt-1">
            <SideBar />
          </Col>
          <Col lg={10}>
            <Outlet />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Layout;
