import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

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
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLogin"><Link to='/login' style={{textDecoration: 'none'}}>Login</Link></button>
        </div>
    </div>
  )
}

export default Register