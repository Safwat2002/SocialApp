import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './register.css';

export default function Register() {

  const navigate = useNavigate();

  // perserve the form data
  const [registerData, setRegisterData] = useState({})
  const [messageHint, setMessageHint] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [isEmailAvailable, setisEmailAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRegisterLoginClick = () => {
    navigate('/login');
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value
    setRegisterData(prev => ({ ...prev, [key]: value }))
  }

  // check username availability as user writing his username
  useEffect(() => {
    const getAvailability = async() => {
      const res = await axios.get(`/users/checkUsername/${registerData.username}`)
      res.data.message === "Available" ? setIsUsernameAvailable(true) : setIsUsernameAvailable(false);
    }
    if(registerData.username){
      getAvailability();
    }
  }, [registerData.username])


  // check email availability
  useEffect(() => {
    const getAvailability = async() => {
      const res = await axios.get(`/users/checkEmail/${registerData.email}`)
      res.data.message === "Available" ? setisEmailAvailable(true) : setisEmailAvailable(false);
    }
    if(registerData.email){
      getAvailability();
    }
  }, [registerData.email])


  // check Password match rePassword
  useEffect(() => {
    if(registerData.password === registerData.repassword){
      setMessageHint("")
    }else{
      setMessageHint("Password Doesn't Match")
    }

  }, [registerData.repassword, registerData.password])

  const handleClickRegister = async (e) => {
    e.preventDefault();
    try{
      if(registerData.password === registerData.repassword){
        setLoading(true);
        await axios.post("/auth/register", registerData)
        setLoading(false);
        navigate("/login")
        alert("You Registered Successfully")
      }else{
        setMessageHint("Password Doesn't Match")
      }
    }catch(err){
      setMessageHint("Something Went Error")
      setLoading(false);
    }
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
          <form style={{ display: "flex", flexDirection: "column" }}>

            <input type="text" placeholder='Username' name='username' className='input-style' required onBlur={handleChange} />
            <span className="input-hint" style={{marginTop:"-12px"}}>
              {isUsernameAvailable && registerData.username !== "" ? "" : "not Available"}
            </span>

            <input type="email" placeholder='Email' name='email' className='input-style' required onBlur={handleChange} />
            <span className="input-hint" style={{marginTop:"-12px"}}>
              {isEmailAvailable && registerData.email !== "" ? "": "not Available"}
            </span>

            <input type="text" placeholder='Full Name' name='fullName' className='input-style' required onBlur={handleChange} />
            <input type="password" placeholder='Password' name='password' className='input-style' required onBlur={handleChange} />
            <input type="password" placeholder='Repeat Password' name='repassword' className='input-style' required onBlur={handleChange} />
            <p className='register-hint' style={{color:"red"}}>{messageHint}</p>
            <button className="button-style" onClick={handleClickRegister}>{loading? "Registering ..." : "Register"}</button>

            <p className='register-hint'>Or Already Have Account</p>
            <button className="button-style register-login-button" onClick={handleRegisterLoginClick}>Login </button>
          </form>
        </div>
      </div>
    </div>
  )
}
