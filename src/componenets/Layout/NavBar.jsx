import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="nav-bar grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Home Market
        </Link>
        <ul className="right">
          <li>
            <Link to="/cart">
              <i class="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
