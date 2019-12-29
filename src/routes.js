import React from "react";
import Reservation from "./page/Reservation";
import Login from "./page/Login";
import Home from "./page/Home";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/employee",
    exact: true,
    main: () => <Login />
  },
  {
    path: "/reservation",
    exact: false,
    main: () => <Reservation />
  }
];

export default routes;
