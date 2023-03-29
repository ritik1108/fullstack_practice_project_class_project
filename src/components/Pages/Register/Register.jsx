import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='register'>
        <div className="registerF">
            <span className="registerTitle">Register</span>
            <form className='registerForm'>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder='Enter your username...' />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder='Enter password...' />
                <button className="registerButton">Login</button>
            </form>
            <button className="registerLogin">Login</button>
        </div>
    </div>
  )
}

export default Register