import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import topImage from '../../assets/imgs/peopleImgs/person1.jpg'
import { logout } from '../../redux/userSlice'
import './topbar.css'

function Topbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try{
            await axios.get('auth/logout');
            dispatch(logout());
            navigate('/login');
        }catch(err){
            alert("Something Went Error");
        }
    }

    const handleUserIconClick = () => {
        navigate('/profile');
    }

    const handleChatIconClick = () => {
        navigate("/messenger")
    }

    return (
        <div className='topbar-container'>
            <div className="topbar-left" onClick={()=>navigate("/")}>
                <span className="logo">Social App</span>
            </div>

            <div className="topbar-center">
                <div className="search-bar">
                    <input type="text" placeholder='Search For Friends, Posts and More' className='search-input' />
                    <Search className='search-icon' />
                </div>
            </div>

            <div className="topbar-right">
                <div className="topbar-links">
                    <span className='topbar-link'>Link 1</span>
                    <span className='topbar-link'>Link 2</span>
                    <span className='topbar-link'>Link 3</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon">
                        <Person />
                        <span className='topbar-icon-badge'>1</span>
                    </div>

                    <div className="topbar-icon" onClick={handleChatIconClick}>
                        <Chat />
                        <span className='topbar-icon-badge'>2</span>
                    </div>

                    <div className="topbar-icon">
                        <Notifications />
                        <span className='topbar-icon-badge'>3</span>
                    </div>

                    <div className="topbar-img-container" onClick={handleUserIconClick}>
                        <img src={topImage} alt="" className="topbar-image iconic-img" />
                    </div>

                    <div className="topbar-logout" onClick={handleLogout}>
                        Logout
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Topbar