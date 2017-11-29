import React from 'react'
import './ContactPage.css'

const ContactPage = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Contact</h1>
            <div id="felix">
                <h3 className="page-header">Felix <small>President & CEO</small></h3>
                <p>email: fgicz@uscargo.us</p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="dan">
                <h3 className="page-header">Dan <small>Account Manager & Partner</small></h3>
                <p>email: dan@uscargo.us</p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="matt">
                <h3 className="page-header">Matt <small>Account Manger</small></h3>
                <p>email: matt@uscargo.us</p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="teddy">
                <h3 className="page-header">Teddy <small>Software Engineer</small></h3> 
                <p>email: ted@uscargo.us</p>
                <p>phone: 123-456-7890</p>
            </div>
        </div>
    )
}

export default ContactPage