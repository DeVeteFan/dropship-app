import React from 'react';
import '../css/nav-bar.css';
import Hamburger from './hamburger';


const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div className="grid-container">
                    <div className="search">search</div>
                    <div className="logo"><h1>logo</h1></div>
                    <div className="hamburger"><Hamburger /></div>
                </div>
            </div>
        </header >
    );
}

export default NavBar;