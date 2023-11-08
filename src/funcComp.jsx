import React from 'react';
import "./navbar.css"
const FunctionalNavbar = () => {
    return (
        <nav>
            <ul>
                <li id = "title" color='white'>Functional based Component</li>
                <li id="navbar">Home</li>
                <li id="navbar">About</li>
                <li id="navbar">Contact</li>
            </ul>
        </nav>
    );
};

export default FunctionalNavbar;