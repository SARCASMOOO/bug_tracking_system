// Imports
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Layout
import AuthLayout from "./layouts/Auth/Auth.js";
import AdminLayout from "./layouts/Admin/Admin";

// Assets
import "./assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "./assets/scss/black-dashboard-pro-react.scss?v=1.1.0";

// Misc
import Requests, { RequestsContext } from './requests';

const hist = createBrowserHistory();

// TODO: Move the static folder into black-dashboard-pro-ract/static with a script.
ReactDOM.render(
  <RequestsContext.Provider value={new Requests()}>
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
  </RequestsContext.Provider>,
  document.getElementById("root")
);
