import React, { Component } from "react";
import HeaderNavbar from '../Header/HeaderNavbar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Dashboard/Footer';
import Sidebar from '../Sidebar/Sidebar';
import AppRouter from "../../routers/AppRouter";
import { Router } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import createHistory from 'history/createBrowserHistory'
export const history = createHistory();

class MainWebFrame extends Component {
  render() {
    return (
      <Router history = { history }>
        <div>
          <Sidebar />
          <div className = 'main-area'>
            <HeaderNavbar />
            <AppRouter />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default MainWebFrame;
