import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { App, Contact, NotFound } from "./containers";

export default class Routes extends React.Component {
  render() {
    return (
      <App>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </App>
    );
  }
}
