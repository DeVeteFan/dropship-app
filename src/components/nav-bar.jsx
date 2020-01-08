import React from 'react';
import '../css/nav-bar.css';
import Hamburger from './hamburger';


const NavBar = () => {
    return (
        <header>

            <div className="grid-container">
                <div className="search">Search</div>
                <div className="brand"> <h1>Brand</h1></div>
                <div className="hamburger"><Hamburger /></div>

            </div>
        </header >
    );
}

export default NavBar;