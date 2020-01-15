import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";

import Home from "./pages/Home";
import PlacarCampeonato from "./pages/PlacarCampeonato";
import TimeInformacoes from "./pages/TimeInformacoes";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/placarcampeonato/:campeonatoId"
        component={PlacarCampeonato}
      />
      <Route path="/timeinfo/:timeId" component={TimeInformacoes} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
