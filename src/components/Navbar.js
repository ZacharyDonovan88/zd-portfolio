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
                <NavLink exact to="/pizza" activeClassName="active">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/sides" activeClassName="active">
                    About
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/drinks" activeClassName="active">
                    Work
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/desserts" activeClassName="active">
                    Contact
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/deals" activeClassName="active">
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