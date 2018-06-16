import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-materialize";
import "./Nav.css";
import Logo from "../../Images/logo.png";

const Img = <img className="logo" src={Logo} alt="nc-news" />;
class Nav extends Component {
  render() {
    return (
      <div className="Navbar-container">
        <Navbar brand={Img} className="Navbar" left>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/topics/football/articles">
              Football
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/topics/cooking/articles">
              Cooking
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/topics/coding/articles">
              Coding
            </NavLink>
          </li>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
