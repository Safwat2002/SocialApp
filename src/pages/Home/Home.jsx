import { useState } from 'react';
import PersonImg from '../../assets/imgs/personsImgs/person1.jpg';
import { Feed, Leftbar, Post, Rightbar, Topbar } from "../../components";
import './home.css';

export default function Home() {

    const [loading] = useState(false);

    return (
        <div className="home-page">
            <Topbar />
            <div className="home-content">
                <Leftbar />
                <Feed isLoading={loading}>
                    <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: PersonImg, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                    <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: PersonImg, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                    <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: PersonImg, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                    <Post data={{ userImg: PersonImg, username: "Safwat Nabeel", postImg: PersonImg, postText: "Hey Its My First Post, my name is safwat nabeel suliman, im studing computer systems engineering in palestine technical university kadoori", isLike: true, LikeCount: 10, isLove: false, LoveCount: 5, date: "1 hour ago", commentCount: 25 }} />
                </Feed>
                <Rightbar />
            </div>
        </div>
    )
}
