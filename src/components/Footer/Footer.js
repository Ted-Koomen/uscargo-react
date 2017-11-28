import React from 'react'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="menu nav">
                    <li className="first leaf"><a href="#">About Us</a></li>
                    <li className="leaf"><a href="#">Privacy Policy</a></li>
                    <li className="last leaf"><a href="#">Contact Us</a></li>
                </ul>
                <p className="text-center"> Copyright © 2017 UsCargo</p>
            </div>
        </footer>
    )
}
export default Footer