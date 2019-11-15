import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import App from "../App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
