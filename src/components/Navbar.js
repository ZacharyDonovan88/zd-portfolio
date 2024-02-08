import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

function Navbar() {
  return (
    <div className="navDiv">
      <nav>
        <div className="navName">
          <h2>Zachary Donovan Ceruto</h2>
        </div>
        <div className="navPort">
          <h2 id="portTitle">Portfolio</h2>
        </div>
        <ul className="navList">
          <li>
            <NavLink exact to="/Home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeClassName="active">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Work" activeClassName="active">
              Work
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/Contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Resume" activeClassName="active">
              Resume
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
