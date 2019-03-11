import React from "react";
import { Link } from "react-router-dom";
import "./navbarLink.css";

export const NavbarLink = (link) => {
  return (
    <Link
      className="navbarLink noselect"
      key={link.name}
      to={link.route}
    >
      <p>{link.name} ></p>
    </Link>
  );
};
