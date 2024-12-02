import React from 'react';
import { useNavigate } from 'react-router';
import './register.css';

export default function Register() {

  const navigate = useNavigate();

  const handleRegisterLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className='register-page'>
      <div className="register-wrapper">
        <div className="register-left">
          <div className="register-logo">
            Social Media App
          </div>

          <div className="register description">
            Connect with friends and the world around you on Social Media App.
          </div>
        </div>

        <div className="register-right">
          <h1 className='register-title'>Register</h1>

          <input type="text" placeholder='Username' name='username' className='input-style' />
          <input type="email" placeholder='Email' name='email' className='input-style' />
          <input type="password" placeholder='Password' name='password' className='input-style' />
          <input type="password" placeholder='Repeat Password' name='repassword' className='input-style' />
          <button className="button-style">Register</button>
          <p className='register-hint'>Or Already Have Account</p>
          <button className="button-style register-login-button" onClick={handleRegisterLoginClick}>Login </button>
        </div>
      </div>
    </div>
  )
}
