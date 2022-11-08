import React from "react";
import { useContext } from "react";
import { Context } from "../index.js";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  ADMIN_ROUTE,
  COINCIDENT_ROUTE,
  COMPARE_ROUTE,
  HOME_ROUTE,
  LAGGING_ROUTE,
  LEADING_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/constants.js";
import classes from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavigationBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={HOME_ROUTE} className={classes.navigationBar}>
          Макроэкономика
        </Navbar.Brand>
        <Nav className="fs-6 w-100">
          <Nav.Link as={NavLink} to={HOME_ROUTE}>
            Главная
          </Nav.Link>
          <Nav.Link as={NavLink} to={LEADING_ROUTE}>
            Опережающие индикаторы
          </Nav.Link>
          <Nav.Link as={NavLink} to={COINCIDENT_ROUTE}>
            Совпадающие индикаторы
          </Nav.Link>
          <Nav.Link as={NavLink} to={LAGGING_ROUTE}>
            Запаздывающие индикаторы
          </Nav.Link>
          {user.isAuth && (
            <Nav.Link as={NavLink} to={COMPARE_ROUTE}>
              Сравнение
            </Nav.Link>
          )}

          {user.isAuth && (
            <Nav.Link as={NavLink} to={PROFILE_ROUTE}>
              Профиль
            </Nav.Link>
          )}
        </Nav>
        {user.isAuth ? (
          <div className="d-flex justify-content-end navbar-nav">
            <Nav.Link as={NavLink} to={ADMIN_ROUTE}>
              Админ
            </Nav.Link>
            <Nav.Link as={NavLink} to={HOME_ROUTE}>
              Выйти
            </Nav.Link>
          </div>
        ) : (
          <div className="d-flex justify-content-end navbar-nav">
            <Nav.Link as={NavLink} to={REGISTRATION_ROUTE}>
              Авторизация
            </Nav.Link>
          </div>
        )}
      </Container>
    </Navbar>
  );
});

export default NavigationBar;
