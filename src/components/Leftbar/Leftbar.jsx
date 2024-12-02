import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import React from 'react'
import './leftbar.css'

import FriendImg from '../../assets/imgs/peopleImgs/person2.jpg'

export default function Leftbar() {
    return (
        <div className='left-bar'>
            <div className="left-bar-wrapper">
                <ul className="left-bar-list">
                    <li className="left-bar-list-item hoverable-box">
                        <RssFeed className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Feed</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <Chat className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Chats</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <PlayCircleFilledOutlined className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Videos</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <Group className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Groups</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <Bookmark className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Bookmarks</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <HelpOutline className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Quesions</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <WorkOutline className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Jobs</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <Event className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Events</span>
                    </li>

                    <li className="left-bar-list-item hoverable-box">
                        <School className='left-bar-item-icon'/>
                        <span className="left-bar-list-item-text">Courses</span>
                    </li>
                </ul>

                <button className="left-bar-show-more">Show More</button>
                <hr className='left-bar-hr'/>

                <h4 className="suggestions">Suggestions</h4>
                <ul className="left-bar-friend-list">
                    <li className="left-bar-friend">
                        <img className='left-bar-friend-img iconic-img' src={FriendImg} alt="" />
                        <span className="left-bar-friend-name">Safwat Nabeel</span>
                        <button className="add-friend button-style">Add</button>
                    </li>

                    <li className="left-bar-friend">
                        <img className='left-bar-friend-img iconic-img' src={FriendImg} alt="" />
                        <span className="left-bar-friend-name">Safwat Nabeel</span>
                        <button className="add-friend button-style">Add</button>
                    </li>

                    <li className="left-bar-friend">
                        <img className='left-bar-friend-img iconic-img' src={FriendImg} alt="" />
                        <span className="left-bar-friend-name">Safwat Nabeel</span>
                        <button className="add-friend button-style">Add</button>
                    </li>

                    <li className="left-bar-friend">
                        <img className='left-bar-friend-img iconic-img' src={FriendImg} alt="" />
                        <span className="left-bar-friend-name">Safwat Nabeel</span>
                        <button className="add-friend button-style">Add</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
