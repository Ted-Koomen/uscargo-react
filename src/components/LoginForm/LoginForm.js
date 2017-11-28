import React, { Component } from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import './LoginForm.css'
class LoginForm extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
                </div>
            </div>
        )
    }
}

export default LoginForm