import React from 'react';
import { RouteModel } from '../../models/routesModel';
import { Switch, Redirect } from "react-router-dom";
import util from '../../util/util';

interface Props {
    defaultRoute: string;
    routes: RouteModel[];
}

const Router = ({ defaultRoute, routes }: Props) => (
    <Switch>
        {util.getRoutes(routes)}
        <Redirect from="*" to={defaultRoute} />
    </Switch>
);

export default Router;