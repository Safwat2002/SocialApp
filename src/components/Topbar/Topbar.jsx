import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router'
import topImage from '../../assets/imgs/peopleImgs/person1.jpg'
import './topbar.css'

function Topbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

    const handleUserIconClick = () => {
        navigate('/profile');
    }

    return (
        <div className='topbar-container'>
            <div className="topbar-left">
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

                    <div className="topbar-icon">
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