import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <img src={require("../assets/imgs/tbaad_banner_3.png")} alt="logo" />
      </div>
    )
  }
}