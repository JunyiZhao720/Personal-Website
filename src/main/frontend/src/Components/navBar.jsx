import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return (  
            <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="#">Home</a>
                <a className="nav-link" href="#">Blogs</a>
                {/* <a className="nav-link" href="#">Contact</a> */}
            </nav>
        );
    }
}
 
export default NavBar;