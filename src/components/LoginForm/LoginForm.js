import React, { Component } from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import './LoginForm.css'
import Input from 'react-validation/build/input';
import axios from 'axios'
class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            accessToken:'',
            loginErrors: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            if(response.status === 200){
                this.setState({
                    accessToken: response.data
                })
            } else {
                console.log("Error")
            }
           
        })
        .catch(err => {
            this.setState({loginErrors: "Invalid email or password combination"})
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
        if(this.state.loginErrors) {
            return (
                <p className="errors">
                    {this.state.loginErrors}
                </p>
            )
        }
    }

    render() {
        const emailLength = this.state.email.length
        const passwordLength = this.state.password.length
        const isNotDisabled = emailLength > 0 && passwordLength > 0
        
        return (
            <div className="login-page text-center">
            {this.loginCheck()}
                <div className="form">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} id="email" type="email" placeholder="email"/>
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