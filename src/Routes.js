import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contents from "./Routes/Contents";
import Home from "./Routes/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/Home" componet={Home} />
    <Route exact path="/Contents" componet={Contents} />
  </Switch>
);

export default Routes;
