import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="menu nav">
                    <li className="first leaf"><Link to="/">About Us</Link></li>
                    <li className="leaf"><a href="#">User Agreement</a></li>
                    <li className="last leaf"><Link to="/contact">Contact Us</Link></li>
                </ul>
                <p className="text-center"> Copyright © 2017 UsCargo</p>
            </div>
        </footer>
    )
}
export default Footer