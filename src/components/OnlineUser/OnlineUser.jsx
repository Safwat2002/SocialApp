import React from 'react';
import './online-user.css';

export default function OnlineUser({user}) {
    return (
        <li className="right-bar-friend hoverable-box">
            <div className="right-bar-img-container">
                <img src={user.userImg} alt="" className='iconic-img' />
                <span className="right-bar-online"></span>
            </div>

            <span className="right-bar-friend-name">{user.username}</span>
        </li>
    )
}
