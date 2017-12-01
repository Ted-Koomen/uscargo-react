import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Redirect} from 'react-router'
import './RegisterForm.css'
class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: '',
            email: '',
            redirect: false,
            errors: []
        }
       
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://uscargo-api.herokuapp.com/users/new', {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
        })
        .then(response => {
            if(response.data) {
                this.setState({
                    errors: response.data,
                    userName: '',
                    email:'',
                    password: ''
                })
            } else {
                this.setState({
                    redirect: true
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleChange = (e) => {
        switch (e.target.id) {
            case "name":
                this.setState({userName: e.target.value})
            break
            case "password":
                this.setState({password: e.target.value})
            break
            case "email":
                this.setState({email: e.target.value})
            break
        }
    }

    renderErrors = () => {
        return(
        this.state.errors.map(error => {
           return( <li>{error}</li>)
        }))
    }
    
    render() {
        const userNameLength = this.state.userName.length
        const passwordLength = this.state.password.length
        const emailLength = this.state.email.length
        const isNotDisabled = userNameLength > 0 && passwordLength > 0 && emailLength > 0

        if (this.state.redirect){
            return <Redirect to="/"/>
        }
        return (
           <div className="login-page text-center">
            <ul className="errors">
                {this.renderErrors()}               
           </ul>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                <input id="name" onChange={this.handleChange} value={this.state.userName} type="text" placeholder="name"/>
                <input id="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="password"/>
                <input id="email" onChange={this.handleChange} type="text" value={this.state.email} placeholder="email address"/>
                <button disabled={!isNotDisabled ? true : false} className={!isNotDisabled ? "disabled" : ""}>create</button>
                <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
        )
    }
}

export default RegisterForm