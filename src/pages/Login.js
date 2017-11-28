import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
const Login = (props) => {
    return (
        <div className="section about-rto">
            <div className="container">
                <h1 className="text-center">Login to view your account.</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login