import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar.jsx";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  COMPARE_ROUTE,
  PROFILE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
} from "../utils/constants";

function Layout() {
  const location = useLocation();
  const routes = [
    COMPARE_ROUTE,
    PROFILE_ROUTE,
    ADMIN_ROUTE,
    ABOUT_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
    "/",
  ];
  let isPath = routes.some((router) => location.pathname === router);
  return (
    <Container fluid>
      <header>
        <NavigationBar />
      </header>
      <main>
        {isPath ? (
          <Outlet />
        ) : (
          <Row>
            <Col lg={2}>
              <SideBar />
            </Col>
            <Col lg={10}>
              <Outlet />
            </Col>
          </Row>
        )}
      </main>
    </Container>
  );
}

export default Layout;
