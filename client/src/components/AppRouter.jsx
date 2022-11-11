import React from "react";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Context } from "../index.js";
import { authRoutes, publicRoutes } from "../routes.js";
import { HOME_ROUTE } from "../utils/constants.js";
import Layout from "./Layout.jsx";

function AppRouter() {
  const { userStore } = useContext(Context);
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Layout />}>
        {userStore.isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        <Route index element={publicRoutes[0].element} />
        {publicRoutes
          .filter((route) => route.path !== HOME_ROUTE)
          .map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
