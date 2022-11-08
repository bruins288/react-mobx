import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Context } from "../index.js";
import { authRoutes, publicRoutes } from "../routes.js";
import Layout from "./Layout.jsx";

function AppRouter() {
  const { user } = useContext(Context);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {user.isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
