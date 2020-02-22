import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (  
        <nav className="nav nav-masthead justify-content-center">
            <NavLink className="nav-link" exact to="/" activeClassName="active"> Home </NavLink>
            <NavLink className="nav-link" to="/profile" activeClassName="active"> Profile </NavLink>
        </nav>
    );
}
 
export default NavBar;