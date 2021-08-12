import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    withRouter
} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <>
            <nav className="navigationMenu">
                <ul>
                    <li className="navigationButton">
                        <Link to="/">Home</Link>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
                        </svg></li>
                    <li className="navigationButton">
                        <Link to="/posts">Posts</Link>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
                        </svg></li>
                    <li className="navigationButton">
                        <Link to="/contacts">Contacts</Link>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
                        </svg></li>
                </ul>
            </nav>
            <hr />
        </>
    );
}

export default withRouter(Header);
