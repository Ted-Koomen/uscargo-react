import React, { Component } from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'
class Register extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="section about-rto">
            <div className="container">
                <h1 className="text-center">Register to start saving.</h1>
                <RegisterForm />                
            </div>
        </div>
        )
    }
}

export default Register