import React, { Component } from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import './LoginForm.css'
import axios from 'axios'
class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName:'',
            password:''
        }
    }

    handleSubmit = () => {
        axios.post('http://localhost:3001/login', {
            userName: this.state.userName,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        switch (event.target.id) {
            case "username":
                this.setState({userName: event.target.value})
            break
            case "password":
                this.setState({password: event.target.value})
            break
        }
    }

    render() {
        const userNameLength = this.state.userName.length
        const passwordLength = this.state.password.length
        const isNotDisabled = userNameLength > 0 && passwordLength > 0
        
        return (
            <div className="login-page">
                <div className="form">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} id="username" type="text" placeholder="username"/>
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