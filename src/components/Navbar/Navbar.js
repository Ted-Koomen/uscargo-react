import React, { Component } from 'react';
import './Navbar.css'
import { NavDropdown, MenuItem } from 'react-bootstrap';


import './Navbar.css'
import '../../App.css'

class Navbar extends Component {
  
  render() {
    return (
      <header id="navbar" role="banner" >
        <div className="container">
          <div className="navbar-header">
            <a className="logo navbar-btn pull-left" href="/" title="Home">
              <h5>uscargo.us</h5>
            </a>


          
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <nav role="navigation">
              <ul className="menu nav navbar-nav">
                
              <NavDropdown eventKey="4" title="Services" id="nav-dropdown">
                    <MenuItem eventKey="4.1">LTL</MenuItem>
                    <MenuItem eventKey="4.2">FTL</MenuItem>
                    <MenuItem eventKey="4.3">Sea</MenuItem>
                    <MenuItem eventKey="4.4">Air</MenuItem>
                </NavDropdown>
               
                <li className="last expanded dropdown">
                  <a href="/login" title="" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}



export default Navbar;