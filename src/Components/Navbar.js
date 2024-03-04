import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    // Check if the current route is the login page
    const isLoginPage = location.pathname === '/';

    // If the current route is the login page, hide the navbar
    if (isLoginPage) {
        return null;
    }

    // If the current route is not the login page, render the navbar
    return (
        <div className="navbar">
            <h1><Link to="/" className="home">SASHAKTH</Link></h1>
           {/*<Link to="#">Help</Link>*/}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* Update the "Home" link to point to the correct route */}
            <Link to="/home" className="home">Home</Link>
        </div>
    );
}
 
export default Navbar;
