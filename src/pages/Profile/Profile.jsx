import React from 'react'
import { default as PersonImg, default as ProfileCover } from '../../assets/imgs/peopleImgs/person1.jpg'
import { default as Person2, default as ProfileImg } from '../../assets/imgs/peopleImgs/person2.jpg'
import { Feed, Leftbar, Post, Rightbar, Topbar } from '../../components'
import './profile.css'

export default function Profile() {
    return (
        <div className='profile-page'>
            <Topbar />

            <div className="profile-content">
                <Leftbar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-imgs">
                            <img src={ProfileImg} alt="" className="profile-cover-img" />
                            <img src={ProfileCover} alt="" className="profile-img" />
                        </div>

                        <div className="profile-info">
                            <h4 className="profile-info-name">Safwat Nabeel</h4>
                            <p className="profile-info-desc">Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering </p>
                            <button className='button-style bio-button'>Edit Bio</button>
                        </div>
                    </div>

                    <div className="profile-right-bottom">
                        <Feed>
                            <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: PersonImg, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                            <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: Person2, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                        </Feed>
                    </div>
                </div>

                <Rightbar profile />
            </div>

        </div>
    )
}
