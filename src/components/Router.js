import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import App from "../App";
import Signup from "./Signup";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={App} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
