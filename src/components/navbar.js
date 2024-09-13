import React from "react";
import "./navbar.css";
import NGOLogo from "../../images/nulife NGO.jpeg";

const Title = () => (
  <a href="/">
    <img className="logo" src={NGOLogo} alt="Nulife NGO Logo" />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Manager</li>
          <li>Donate</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
