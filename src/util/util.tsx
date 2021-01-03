import React from 'react';
import { RouteModel } from '../models/routesModel';
import { Route } from "react-router-dom";

const utilModule = (() => {
    const isOSWindows = (nav: Navigator) => (nav.platform.indexOf("Win") > -1);

    const isMapFullScreen = (location: any) =>
        (location.pathname.indexOf("full-screen-map") !== -1);

    const getRoutes = (routes: RouteModel[]): any =>
        routes.map((prop, key) => mapRoute(prop, key));

    function isNavBarVisible(document: Document, mainPanel: any) {
        if (!document.scrollingElement) return true;
        const documentScrollTop = document.documentElement.scrollTop;
        const scrollingScollTop = document.scrollingElement.scrollTop;
        // @ts-ignore
        return (documentScrollTop > 50 || scrollingScollTop > 50 || mainPanel.scrollTop > 50);
    }

    function mapRoute(prop: RouteModel, key: number) {
        const { views, layout, path, collapse, component } = prop;
        if (collapse && views) return getRoutes(views);

        return (
            (layout === "/admin" && path) ? (
                <Route path={layout + path} component={component} key={key} />
            ) : null
        );
    }

    function getActiveRoute(routes: RouteModel[]): String {
        let activeRoute = "Default Brand Text";

        routes.some(({ collapse, views, name, layout, path }) => {
            if (collapse && views) {
                let collapseActiveRoute = getActiveRoute(views);
                if (collapseActiveRoute !== activeRoute) return collapseActiveRoute;
            } else {
                if (layout && path) {
                    if (window.location.pathname.indexOf(layout + path) !== -1) {
                        activeRoute = name;
                        return true;
                    }
                }
            }
        });

        return activeRoute;
    }

    return {
        isOSWindows: isOSWindows,
        getRoutes: getRoutes,
        isNavBarVisible: isNavBarVisible,
        mapRoute: mapRoute,
        getActiveRoute: getActiveRoute,
        isMapFullScreen: isMapFullScreen
    };
})();


export default utilModule;







