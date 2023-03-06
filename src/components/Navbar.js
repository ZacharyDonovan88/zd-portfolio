import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Home() {
 
   return (
     <>
<div className="navDiv">
        <nav>
            <div className="navName">
                <h2>Zachary Donovan Ceruto</h2>
            </div>
            <div className="navPort">
                <h2 id="portTitle">Portfolio</h2>
            </div>
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