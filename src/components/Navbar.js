import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Home() {
 
   return (
     <>
<div className="navDiv">
    <h2>Zachary Donovan Ceruto</h2>
        <nav>
            <ul>
                
                <li>
                <NavLink exact to="/Home" activeClassName="active">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/About" activeClassName="active">
                    About
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Work" activeClassName="active">
                    Work
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Contact" activeClassName="active">
                    Contact
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/Resume" activeClassName="active">
                    Resume
                </NavLink>
                </li>
            </ul>
        </nav>
</div>

     </>
   );
 }
 
 export default Home;