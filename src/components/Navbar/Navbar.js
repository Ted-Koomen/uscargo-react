import React from 'react';
import './Navbar.css'
import '../../App.css'
const Navbar = (props) => {
  return (
    <header id="navbar" role="banner" >
      <div className="container">
        <div className="navbar-header">
          <a className="logo navbar-btn pull-left" href="/" title="Home">
            <img src="http://www.renttoown.cc/sites/renttoown.cc/themes/rtocc/logo.png" alt="Home" />
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
            <ul className="menu nav navbar-nav"><li className="first expanded dropdown"><a href="/rent-to-own-homes" title="" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Rent to Own Guide <span className="caret"></span></a><ul className="dropdown-menu"><li className="first leaf"><a href="/rent-to-own-guide/what-is-rent-to-own">What is Rent to Own?</a></li>
              <li className="leaf"><a href="/rent-to-own-guide/how-does-rent-to-own-work">How does Rent to Own work?</a></li>
              <li className="leaf"><a href="/rent-to-own-guide/is-rent-to-own-for-me">Is Rent To Own For Me?</a></li>
              <li className="leaf"><a href="/rent-to-own-guide/credit-to-qualify-for-rent-to-own">Do I need good credit to qualify for Rent to Own?</a></li>
              <li className="leaf"><a href="/rent-to-own-guide/how-to-find-rent-to-own-homes">How do I find Rent to Own homes?</a></li>
              <li className="leaf"><a href="/rent-to-own-guide/what-to-do-after-finding-rent-to-own-home">Once I find a Rent to Own home, what do I do?</a></li>
              <li className="last leaf"><a href="/rent-to-own-guide/rent-to-own-agreement">Rent to Own Agreement</a></li>
            </ul></li>
              <li className="last expanded dropdown"><a href="/rent-to-own-homes" title="" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Rent to Own Homes <span className="caret"></span></a><ul className="dropdown-menu"><li className="first leaf"><a href="/rent-to-own-homes/fl/miami" title="">Miami, FL Rent to Own Homes</a></li>
                <li className="leaf"><a href="/rent-to-own-homes/ca/san-diego" title="">San Diego, CA Rent to Own  Homes</a></li>
                <li className="leaf"><a href="/rent-to-own-homes/co/colorado-springs" title="">Colorado Springs, CO Rent to Own Homes</a></li>
                <li className="last leaf"><a href="/rent-to-own-homes/all-cities" title="">Rent to Own Homes by State</a></li>
              </ul></li>
            </ul>                                      </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar;