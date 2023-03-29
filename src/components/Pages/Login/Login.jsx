import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className="loginF">
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="email" className="loginInput" placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder='Enter password...' />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegistration">Register</button>
        </div>
    </div>
  )
}

export default Login