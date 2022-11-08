import React from "react";
import { useContext } from "react";
import { Context } from "../../index.js";
import { Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  COMPARE_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/constants.js";
import NavDropDown from "./menudropdown/NavDropDown.jsx";

const NavbarOffcanvasBody = observer(() => {
  const { user } = useContext(Context);
  return (
    <Offcanvas.Body>
      <Nav className="fs-5 w-100">
        <Nav.Link as={NavLink} to={HOME_ROUTE}>
          Главная
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
        <NavDropDown />
        <Nav.Link as={NavLink} to={ABOUT_ROUTE}>
          О себе
        </Nav.Link>
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
    </Offcanvas.Body>
  );
});

export default NavbarOffcanvasBody;
