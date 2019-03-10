import React, { Component } from 'react';
import Header from './components/header.js';
import VerticalNavbar from './components/navbar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-layout">
        <div className="logo-header">
          <Header />
        </div>
        <div className="vertical-nav">
          <VerticalNavbar />
        </div>
      </div>
    );
  }
}

export default App;
