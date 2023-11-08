import React, { Component } from 'react';
import "./navbar.css"
class ClassNavbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li id = "title" color='white'>Class based Component</li>
                    <li id="navbar">Home</li>
                    <li id="navbar">About</li>
                    <li id="navbar">Contact</li>
                </ul>
            </nav>
        );
    }
}

export default ClassNavbar;