import React from 'react';
import {  NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
               
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Mobiles" >Mobiles</NavLink>
                <NavLink to="/Laptops" >Laptops</NavLink>
            </nav>
        </div>
    );
};

export default Header;