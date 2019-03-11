import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import VerticalNavbar from "./components/navbar";
import AboutUs from "./routing/aboutUs/aboutUs.js";
import Blog from "./routing/blog/blog.js";
import Contact from "./routing/contact/contact.js";
import Home from "./routing/home/home.js";
import Notfound from "./routing/notFound/notFound.js";
import "./App.css";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <div className="container-layout">
    <div className="logo-header">
      <Header />
    </div>
    <Router>
      <div className="content-row">
        <div className="vertical-nav">
          <VerticalNavbar />
        </div>
        <div className="body-content">
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog/:id" component={Blog} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
