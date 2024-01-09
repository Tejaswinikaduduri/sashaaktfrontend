import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header class="header">
        <a href="#top" class="logo">SASHAKTH</a>
        <nav class="nav-items">
          <Link to="/">Home</Link>
          <Link to="/click">About</Link>
          <Link to="/go">Contact</Link>
        </nav>
      </header>
      );
}
 
export default Navbar;