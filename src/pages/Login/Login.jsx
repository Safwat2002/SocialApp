import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchUserData } from '../../redux/userSlice';
import './login.css';

export default function Login() {
  /**
   * login need to be fixed
   * we need to keep the user data in redux userReducer when login
   * after 24 hours this persisted data will be deleted as the token will be expired
   */

  const dispatch = useDispatch();

  const [credintials, setCredintials] = useState();
  const loading = useSelector(state => state.user.status);

  const loginData = useSelector(state => state.user);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setCredintials(prev => ({ ...prev, [key]: value }))
  }

  const handleLogin = (e) => {
    if(validate){
      e.preventDefault();
      dispatch(fetchUserData(credintials));
    }else{
      alert("Not Valid Data")
    }
  }

  const validate = ()=>{
    if(credintials.username === '' || credintials.password === '' || credintials.username === null || credintials.password === null){
      return false
    }
    return true
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
            <h4 style={{ paddingBottom: "20px" }}>Login Into Your Account</h4>
            <form style={{display:"flex", flexDirection:"column"}}>
              <input type="text" name='username' placeholder="username" autoComplete='' className="login-input input-style" onChange={handleChange} />
              <input type="password" name='password' placeholder="Password" autoComplete='' className="login-input input-style" onChange={handleChange} />
              <span className="login-message">{loginData.status === "error" ? "User Or Password Doesn't Match" : ""}</span>

              <button className="login-button button-style" onClick={handleLogin}>
                {loading === "pending" ? "Loggin in..." : "Login"}
              </button>

              <span className="login-forgot">Forgot Password?</span>

              <Link to="/register" style={{ margin: "0px auto" }}>
                <button className="login-register-button button-style">Create a New Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
