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
import PerfectScrollbar from "perfect-scrollbar";
import util from '../../util/util';
// Components
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Router from "../../components/Router/Router";
import NotificationWrapper from '../../components/Notification/Notification';
import NavbarMinimizeButton from '../../components/NavbarMinimizeButton/NavbarMinimizeButton';
import Container from '../../components/UI/Container/Container';

// Misc
import routes from "../../routes";
import logo from "../../assets/img/react-logo.png";


interface State {
  activeColor: string;
  sidebarMini: boolean;
  opacity: number;
  sidebarOpened: boolean;
  tempLogo: Logo;
};

interface Props {
  location: any;
  history: any;
};

interface Logo {
  outterLink: string;
  text: string;
  imgSrc: string;
}

// TODO: Convert this to be inside of state
let ps: PerfectScrollbar;

class Admin extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tempLogo = {
      outterLink: "https://www.creative-tim.com/",
      text: "Creative Tim",
      imgSrc: logo
    }

    this.state = {
      activeColor: "blue",
      sidebarMini: true,
      opacity: 0,
      sidebarOpened: false,
      tempLogo: tempLogo
    };
  }

  private togglePerfectScrollBar(isVisibile: boolean) {
    if (isVisibile) {
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
    } else {
      document.documentElement.classList.add("perfect-scrollbar-off");
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }

  private setUpComponentForOSWindows() {
    this.togglePerfectScrollBar(true);
    ps = new PerfectScrollbar(this.refs.mainPanel as HTMLElement);
    // @ts-ignore 
    this.refs.mainPanel.addEventListener("ps-scroll-y", this.showNavbarButton);
    this.createScrollBarsForTables();
  }

  private tearDownComponentForOSWindows() {
    ps.destroy();
    this.togglePerfectScrollBar(false);
    // @ts-ignore 
    this.refs.mainPanel.removeEventListener("ps-scroll-y", this.showNavbarButton);
  }

  private createScrollBarsForTables() {
    let tables = document.querySelectorAll<HTMLInputElement>(".table-responsive");
    for (let i = 0; i < tables.length; i++) {
      ps = new PerfectScrollbar(tables[i]);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.showNavbarButton);
    if (util.isOSWindows(navigator)) this.setUpComponentForOSWindows();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showNavbarButton);
    if (util.isOSWindows(navigator)) this.tearDownComponentForOSWindows();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname !== prevProps.history.location.pathname) {
      if (util.isOSWindows(navigator)) this.createScrollBarsForTables();
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      // @ts-ignore 
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  showNavbarButton = () => {
    const isNavBarVisible = util.isNavBarVisible(document, this.refs.mainPanel);
    isNavBarVisible ? this.setState({ opacity: 1 }) : this.setState({ opacity: 0 });
  }

  handleActiveClick = (color: string) => this.setState({ activeColor: color });

  handleMiniClick = () => document.body.classList.toggle("sidebar-mini");

  toggleSidebar = () => {
    // FIXME: This depends on the prev state.
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
    document.documentElement.classList.toggle("nav-open");
  };

  closeSidebar = () => {
    this.setState({ sidebarOpened: false });
    document.documentElement.classList.remove("nav-open");
  };


  render() {
    return (
      <Container>
        <NotificationWrapper />
        <NavbarMinimizeButton
          handleMiniClick={this.handleMiniClick}
          opacity={this.state.opacity} />

        <Sidebar
          {...this.props}
          routes={routes}
          activeColor={this.state.activeColor}
          logo={this.state.tempLogo}
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
            brandText={util.getActiveRoute(routes)}
            sidebarOpened={this.state.sidebarOpened}
            toggleSidebar={this.toggleSidebar}
          />

          <Router defaultRoute="/admin/dashboard" routes={routes} />
          {util.isMapFullScreen(this.props.location) ? null : (<Footer fluid />)}
        </div>
      </Container>
    );
  }
}

export default Admin;
