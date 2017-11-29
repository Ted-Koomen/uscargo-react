import React from 'react'
import './ContactPage.css'

const ContactPage = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Contact</h1>
            <div id="felix">
                <h3 className="page-header">Felix <small>President & CEO</small></h3>
                <p>email: <a href="mailto:fgicz@uscargo.us" target="_top">fgicz@uscargo.us</a></p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="dan">
                <h3 className="page-header">Dan <small>Account Manager & Partner</small></h3>
                <p>email: <a href="mailto:dan@uscargo.us" target="_top">dan@uscargo.us</a></p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="matt">
                <h3 className="page-header">Matt <small>Account Manger</small></h3>
                <p>email: <a href="mailto:matt@uscargo.us" target="_top">matt@uscargo.us</a></p>
                <p>phone: 123-456-7890</p>
            </div>
            <div id="teddy">
                <h3 className="page-header">Teddy <small>Software Engineer</small></h3> 
                <p>email: <a href="mailto:ted@uscargo.us" target="_top">ted@uscargo.us</a></p>
                <p>phone: 123-456-7890</p>
            </div>
        </div>
    )
}

export default ContactPage