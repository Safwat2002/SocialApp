import React from 'react'
import './login.css'
import { useNavigate } from 'react-router'

export default function Login() {

  const navigate = useNavigate();

  const handleLoginRegisterClick = () => {
    navigate('/register');
  }

  return (
    <div className='login-page'>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Social Media App</h3>
          <span className="login-description">
            Connect with friends and the world around you on Social Media App.
          </span>
        </div>

        <div className="login-right">
          <div className="login-box">
          <h4 style={{paddingBottom:"20px"}}>Login Into Your Account</h4>
            <input type="email" placeholder="Email" className="login-input input-style" />
            <input type="password" placeholder="Password" className="login-input input-style" />
            <button className="login-button button-style">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button button-style" onClick={handleLoginRegisterClick}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
