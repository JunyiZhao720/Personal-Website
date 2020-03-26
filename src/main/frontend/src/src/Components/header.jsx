import React from 'react';
import NavBar from './Header/navBar';
import { withRouter } from 'react-router-dom';

const _Header = (props) => {

    const { location } = props;

    console.log(location);
    if (location.pathname.match('/manager')) { return null; }
    if (location.pathname.match('/login')) { return null; }

    return ( 
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">University of Waterloo</h3>
                <NavBar />
            </div>
        </header>

        );
}
 
const Header = withRouter(_Header);
export default Header;