import { Link } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import './post-down-list.css';
import { useNavigate } from 'react-router'

export default function PostDownList({userId, postId}) {

    const profileData = useSelector(state=>state.user.userData);
    const navigate = useNavigate();

    const handleDeletePost = async () => {
        try{
            const res = await axios.delete(`/posts/${postId}`)
            alert(res.data.message);
        }catch{}
    }

    return (
        <div className='post-down-list main-box-shadow'>
            <ul>
                {
                    userId === profileData._id ? (
                        <>
                                <li className="hoverable-box" onClick={()=>{navigate("/profile/editPost")}}>Edit Post</li>

                            <li className="hoverable-box" onClick={handleDeletePost}>Delete Post</li>
                        </>
                    ):("")
                }
                <Link top={"/profile/editPost"}></Link>
                <li className="hoverable-box">Remove From View</li>
            </ul>
        </div>
    )
}
