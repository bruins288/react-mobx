import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/home">Home</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2022</footer>
    </div>
  );
}

export default Layout;
