import React from "react";
import { NavLink } from "react-router-dom"; 
// import "./Style/Navbar.css"
 

function NavBar() { 
    
    return ( 
        <div id="navbar-container">
        <nav className="navbar">
            <NavLink to='/' >Home</NavLink> 
            <div>
            <NavLink to='/NewRecipeForm'>New Recipe Form</NavLink> 
            <NavLink to= '/login'> Login </NavLink> 
            <NavLink to = '/signup'> SignUp</NavLink> 
            <NavLink to = '/favorites'> Favorite </NavLink>             
            </div>
        </nav>
        </div>
    );
}; 

export default NavBar;