import React from "react";
import Home from "./page/Home";
import Reservation from "./page/Reservation";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/reservation",
    exact: false,
    main: () => <Reservation />
  }
];

export default routes;
