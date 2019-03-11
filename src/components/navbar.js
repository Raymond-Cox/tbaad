import React, { Component } from "react";
import {NavbarLink} from "./navbarLink.js";
import "./navbar.css";
export default class VerticalNavbar extends Component {
  
  render() {
    let linksList = [
      { route: "/", name: "Home" },
      { route: "/about", name: "About Us" },
      { route: "/blog", name: "Blog Posts" },
      { route: "/contact", name: "Contact Us" },
    ];
    return (
      <div className="navbarContainer">
          {linksList.map(link => NavbarLink(link))}
      </div>
    );
  }
}
