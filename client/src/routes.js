import Admin from "./pages/Admin.jsx";
import Profile from "./pages/Profile.jsx";
import CompareCountries from "./pages/CompareCountries.jsx";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import LeadingIndicators from "./pages/leading/LeadingIndicators.jsx";
import CoincidentIndicators from "./pages/coincident/CoincidentIndicators.jsx";
import CoincidentCountry from "./pages/coincident/CoincidentCountry.jsx";
import LaggingIndicators from "./pages/lagging/LaggingIndicators.jsx";
import LaggingCountry from "./pages/lagging/LaggingCountry.jsx";
import {
  ADMIN_ROUTE,
  COINCIDENT_ROUTE,
  COMPARE_ROUTE,
  HOME_ROUTE,
  LAGGING_ROUTE,
  LEADING_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/constants.js";
import LeadingCountry from "./pages/leading/LeadingCountry.jsx";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />,
  },
  {
    path: COMPARE_ROUTE,
    element: <CompareCountries />,
  },
];
export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: LEADING_ROUTE,
    element: <LeadingIndicators />,
  },
  {
    path: LEADING_ROUTE + "/:country",
    element: <LeadingCountry />,
  },
  {
    path: COINCIDENT_ROUTE,
    element: <CoincidentIndicators />,
  },
  {
    path: COINCIDENT_ROUTE + "/:country",
    element: <CoincidentCountry />,
  },
  {
    path: LAGGING_ROUTE,
    element: <LaggingIndicators />,
  },
  {
    path: LAGGING_ROUTE + "/:country",
    element: <LaggingCountry />,
  },
];
