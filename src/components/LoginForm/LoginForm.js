import React, { Component } from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import './LoginForm.css'
import axios from 'axios'
class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            accessToken:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            this.setState({
                accessToken: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        switch (event.target.id) {
            case "email":
                this.setState({email: event.target.value})
            break
            case "password":
                this.setState({password: event.target.value})
            break
        }
    }

    loginCheck = () => {
        if(this.state.accessToken) {
            return (
                <p>
                    Logged In
                </p>
            )
        }
    }

    render() {
        const emailLength = this.state.email.length
        const passwordLength = this.state.password.length
        const isNotDisabled = emailLength > 0 && passwordLength > 0
        
        return (
            <div className="login-page">
                <div className="form">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} id="email" type="text" placeholder="email"/>
                    <input onChange={this.handleChange} id="password" type="password" placeholder="password"/>
                        <button disabled={!isNotDisabled ? true : false} className = {!isNotDisabled ? "disabled" : ""}>login</button>
                    <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
                </div>
            </div>
        )
    }
}

export default LoginForm