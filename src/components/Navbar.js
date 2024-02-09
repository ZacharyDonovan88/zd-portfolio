import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

function Navbar() {
  return (
    <div className="navBar-Container">
        <div className='navBar'>
          <ul>
            <li>
              <NavLink exact to="/Home" className="navLi" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="navLi" activeClassName="active">
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/Work" className="navLi" activeClassName="active">
                Work
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/Contact" className="navLi" activeClassName="active">
                Contact
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/Resume" className="navLi" activeClassName="active">
                Resume
              </NavLink>
            </li> */}
          </ul>
          <h4>Portfolio</h4>
        </div>
    </div>
  );
}

export default Navbar;
