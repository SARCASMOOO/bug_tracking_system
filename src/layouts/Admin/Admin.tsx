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

// Modules
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import NotificationAlert from "react-notification-alert";

// Components
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

// Misc
import { RouteModel } from '../../models/routesModel';
import routes from "../../routes";
import logo from "../../assets/img/react-logo.png";

let ps: PerfectScrollbar;

interface State {
  activeColor: string;
  sidebarMini: boolean;
  opacity: number;
  sidebarOpened: boolean;
};

interface Props { 
  location: any;
  history: any;
};

class Admin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeColor: "blue",
      sidebarMini: true,
      opacity: 0,
      sidebarOpened: false
    };
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {

      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");

      ps = new PerfectScrollbar(this.refs.mainPanel as HTMLElement);
      // FIXME: ReactInstance doesn't contain addEventListener 
      // @ts-ignore 
      this.refs.mainPanel.addEventListener("ps-scroll-y", this.showNavbarButton);

      let tables = document.querySelectorAll<HTMLInputElement>(".table-responsive");

      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }

    }

    window.addEventListener("scroll", this.showNavbarButton);
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();

      // @ts-ignore
      document.documentElement.className.add("perfect-scrollbar-off");
      document.documentElement.classList.remove("perfect-scrollbar-on");

      // FIXME: ReactInstance doesn't contain removeEventListener 
      // @ts-ignore 
      this.refs.mainPanel.removeEventListener("ps-scroll-y", this.showNavbarButton);
    }

    window.removeEventListener("scroll", this.showNavbarButton);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname !== prevProps.history.location.pathname) {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          // FIXME: Can't convert NodeList<HTMLElement>[] to HTMLEllement[] 
          // @ts-ignore 
          ps = new PerfectScrollbar(tables[i]);
        }
      }

      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;

      // @ts-ignore 
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  showNavbarButton = () => {
    if (!document.scrollingElement) return;
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      // @ts-ignore
      this.refs.mainPanel.scrollTop > 50
    ) {
      this.setState({ opacity: 1 });
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      // @ts-ignore
      this.refs.mainPanel.scrollTop <= 50
    ) {
      this.setState({ opacity: 0 });
    }
  };

  // FIXME: I am not sure which return type to use for a route.
  getRoutes = (routes: RouteModel[]): any => {
    return routes.map((prop, key) => {
      const propViews = prop.views;
      const propLayout = prop.layout;
      const propPath = prop.path;
      
      if (prop.collapse && propViews) return this.getRoutes(propViews);

      return (
        (propLayout === "/admin") ? (
          <Route
            path={propLayout + propPath}
            component={prop.component}
            key={key}
          />
        ) : null
      );
    });
  };

  getActiveRoute = (routes: RouteModel[]): String => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        const routeViews = routes[i].views;
        if (routeViews) {
          let collapseActiveRoute = this.getActiveRoute(routeViews);
          if (collapseActiveRoute !== activeRoute) return collapseActiveRoute;
        }

      } else {
        const viewLayout = routes[i].layout;
        const viewPath = routes[i].path;

        if (viewLayout && viewPath) {
          if (window.location.pathname.indexOf(viewLayout + viewPath) !== -1) {
            return routes[i].name;
          }
        }
      }
    }

    return activeRoute;
  };

  handleActiveClick = (color: string) => this.setState({ activeColor: color });


  handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      this.setState({ sidebarMini: false });
      notifyMessage += "deactivated...";
    } else {
      this.setState({ sidebarMini: true });
      notifyMessage += "activated...";
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };

    // @ts-ignore
    this.refs.notificationAlert.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
  };

  toggleSidebar = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
    document.documentElement.classList.toggle("nav-open");
  };

  closeSidebar = () => {
    this.setState({ sidebarOpened: false });
    document.documentElement.classList.remove("nav-open");
  };

  render() {
    return (
      <div className="wrapper">
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <div
          className="navbar-minimize-fixed"
          style={{ opacity: this.state.opacity }}
        >
          <button
            className="minimize-sidebar btn btn-link btn-just-icon"
            onClick={this.handleMiniClick}
          >
            <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
            <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
          </button>
        </div>

        <Sidebar
          {...this.props}
          routes={routes}
          activeColor={this.state.activeColor}
          logo={{
            outterLink: "https://www.creative-tim.com/",
            text: "Creative Tim",
            imgSrc: logo
          }}
          closeSidebar={this.closeSidebar}
        />
        <div
          className="main-panel"
          ref="mainPanel"
          // @ts-ignore
          data={this.state.activeColor}
        >

          <AdminNavbar
            {...this.props}
            handleMiniClick={this.handleMiniClick}
            brandText={this.getActiveRoute(routes)}
            sidebarOpened={this.state.sidebarOpened}
            toggleSidebar={this.toggleSidebar}
          />

          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/dashboard" />
          </Switch>
          {// we don't want the Footer to be rendered on full screen maps page
            this.props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (<Footer fluid />)}
        </div>
      </div>
    );
  }
}

export default Admin;
