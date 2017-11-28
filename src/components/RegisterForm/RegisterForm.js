import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './RegisterForm.css'
class RegisterForm extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
           <div className="login-page">
            <div className="form">
                <form>
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
        )
    }
}

export default RegisterForm