/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Dashboard from "./views/Dashboard.js";
import Insight from './views/Insight/Insight';
import Login from './views/Login/Login';

import {RouteModel} from './models/routesModel';

export enum routePaths {
  dashboard = '/admin/dashboard',
  insight = '/admin/insight',
  issues = '/admin/issues',
  signIn = '/admin/signIn'
}

const routes: RouteModel[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/insight",
    name: "Insight",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Insight,
    layout: "/admin"
  },
  {
    path: "/issues",
    name: "Issues",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Insight,
    layout: "/admin"
  },
  {
    path: "/signIn",
    name: "Sign In",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "/admin"
  }
];

export default routes;

