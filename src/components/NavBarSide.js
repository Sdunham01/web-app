// NavBar.js
import React from 'react';
import './Style/NavBar.css';

const NavBar = ({ onNavClick }) => {
    return (
        <div className="nav-bar">
            <ul className="nav-links">
                <li onClick={() => onNavClick('Home')}><a href="#">Home</a></li>
                <li onClick={() => onNavClick('Services')}><a href="#">Services</a></li>
                <li onClick={() => onNavClick('Support')}><a href="#">Support</a></li>
                <li onClick={() => onNavClick('Partners')}><a href="#">Partners</a></li>
                <li onClick={() => onNavClick('ContactUs')}><a href="#">Contact Us</a></li>
                <li onClick={() => onNavClick('Careers')}><a href="#">Careers</a></li>
            </ul>
        </div>
    );
};

export default NavBar;
