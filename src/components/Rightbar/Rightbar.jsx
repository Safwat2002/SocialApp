import CakeIcon from '@mui/icons-material/Cake';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdImage from '../../assets/imgs/ad/ad.jpg';
import FriendImg from '../../assets/imgs/peopleImgs/person2.jpg';
import OnlineUser from '../OnlineUser/OnlineUser';
import './rightbar.css';

export default function Rightbar({ profile }) {

    const [friends,setFriends] = useState();

    const getSingleUser = async (userId) => {
        const res = await axios.get(`/users/${userId}`)
        const data = res.data;
        return data;
    }

    const getFriends =async ()=>{
        const friends = await Promise.all(
            followings.map((following)=>axios.get(`/users/${following}`))
        )
        setFriends(friends.data);
    }
    
    const followings = useSelector(state=>state.user.userData.followings);

    useEffect(()=>{
        getFriends();
    },[followings])



    const HomePageRightBar = () => {
        return (
            <>
                <div className="birthday-container">
                    <CakeIcon fontSize='large' className="birthday-icon" />
                    <span className="birthday-text">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>


                <div className="right-bar-ad">
                    <img src={AdImage} alt="" className="right-bar-ad-img" />
                </div>

                <div className="right-bar-friends-container">
                    <h4 className="right-bar-title">Online Friends</h4>

                    <ul className="right-bar-friend-list">
                        <OnlineUser user={{ userImg: FriendImg, username: "Safwat Nabeel" }} />
                        <OnlineUser user={{ userImg: FriendImg, username: "Safwat Nabeel" }} />
                        <OnlineUser user={{ userImg: FriendImg, username: "Safwat Nabeel" }} />
                        <OnlineUser user={{ userImg: FriendImg, username: "Safwat Nabeel" }} />
                        <OnlineUser user={{ userImg: FriendImg, username: "Safwat Nabeel" }} />
                    </ul>
                </div></>
        )
    }

    const ProfilePageRightBar = () => {
        const user = useSelector(state=>state.user.userData);
        return (
            <>
                <h4 className='right-bar-title'>Information</h4>
                <div className="right-bar-info">
                    {
                        user.city ? (
                            <div className="right-bar-info-item">
                                <span className="right-bar-info-key">City:</span>
                                <span className="right-bar-info-value">{user.city}</span>
                            </div>
                        ): ""
                    }

                    {
                        user.from ? (
                            <div className="right-bar-info-item">
                                <span className="right-bar-info-key">From:</span>
                                <span className="right-bar-info-value">{user.from}</span>
                            </div>
                        ): ""
                    }

                    {
                        user.relationship ? (
                            <div className="right-bar-info-item">
                                <span className="right-bar-info-key">Relationship:</span>
                                <span className="right-bar-info-value">{user.relationship}</span>
                            </div>
                        ): ""
                    }
                </div>

                <hr style={{ marginBottom: "20px" }} />

                <h4 className="right-bar-title">Friends</h4>
                <div className="right-bar-followings">
                       
                    <div className="right-bar-following">
                        <img src={ FriendImg} alt="" className="right-bar-following-img" />
                        <span className="right-bar-following-name">Safwat nabeel</span>
                    </div>
                    <div className="right-bar-following">
                        <img src={ FriendImg} alt="" className="right-bar-following-img" />
                        <span className="right-bar-following-name">Safwat nabeel</span>
                    </div>
                    <div className="right-bar-following">
                        <img src={ FriendImg} alt="" className="right-bar-following-img" />
                        <span className="right-bar-following-name">Safwat nabeel</span>
                    </div>
                    <div className="right-bar-following">
                        <img src={ FriendImg} alt="" className="right-bar-following-img" />
                        <span className="right-bar-following-name">Safwat nabeel</span>
                    </div>

                </div>
            </>
        )
    }
    return (
        <div className='right-bar'>
            <div className="right-bar-wrapper">
                {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
            </div>
        </div>
    )
}
