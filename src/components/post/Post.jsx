import { MoreVert } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DefaultImg from '../../assets/imgs/icons/default.jpg';
import './post.css';
import PostDownList from './PostDownList';

export default function Post({data}) {

    const [like, setLike] = useState({ isLike: data.isLike, count: data.LikeCount });
    const [love, setLove] = useState({ isLove: data.isLove, count: data.LoveCount });
    const [postImg, setPostImg] = useState();
    const [userId] = useState(data.userId)
    const [showPostOptions, setShowPostOptions] = useState(false); // control the option click to toggle show and hide
    const [postOwnerName, setPostOwnerName] = useState("")
    const [postOwnerImg, setPostOwnerImg] = useState();

    const handleLike = async () => {
        try{
            if(data._id){
                const res = await axios.put(`/posts/${data._id}/likeDislike`);
                like.isLike ? setLike({ isLike: !like.isLike, count: like.count - 1 }) :
                setLike({ isLike: !like.isLike, count: like.count + 1 });
                love.isLove && setLove({ isLove: !love.isLove, count: love.count - 1 });
            }
        }catch(err){}

    }

    const handleLove = async () => {
        try{
            if(data._id){
                const res = await axios.put(`/posts/${data._id}/loveUnlove`);
                love.isLove ? setLove({ isLove: !love.isLove, count: love.count - 1 }) :
                setLove({ isLove: !love.isLove, count: love.count + 1 });
                like.isLike && setLike({ isLike: !like.isLike, count: like.count - 1 });
            }
        }catch(err){}
    }

    const getPostImg = async () => {
        try{
            const res = await axios.get(`/imgs/image/${data.img}`,{
                responseType: 'blob'
            })
            setPostImg(URL.createObjectURL(res.data))
        }catch{}
    }

    const getOwnerInfo = async() => {
        try{
            const res = await axios.get(`/users/${userId}`)
            setPostOwnerName(res.data.fullName)

            const img = await axios.get(`/imgs/image/${res.data.profilePicture}`,{responseType:'blob'})
            setPostOwnerImg(URL.createObjectURL(img.data))

        }catch(err){}
    }

    useEffect(()=>{
        if( !data.userImg || !data.userFullName){
            getOwnerInfo()
        }
        getPostImg()
    },[])

    return (
        <div className='post main-box-shadow'>

            <div className="post-top">
                {showPostOptions ? <PostDownList userId={userId} postId={data._id}/> : ""}
                <div className="post-top-left">
                    <img src={data.userImg ? data.userImg : postOwnerImg || DefaultImg} alt="Profile" className='post-top-img iconic-img' />
                    <span className="post-top-username">{data.userFullName ? data.userFullName : postOwnerName}</span>
                    <span className="post-top-date">{data.date}</span>
                </div>
                <div className="post-top-right" onClick={()=>setShowPostOptions(prev=>!prev)}>
                    <MoreVert />
                </div>
            </div>
            <div className="post-center">
                <div className="post-text">{data.description}</div>
                <img src={postImg ? postImg:""} alt="" className='post-img' />
            </div>

            <div className="post-bottom">
                <div className="post-reacting-icons">
                    <div className="post-icon-wrapper">
                        {
                            like.isLike ? (
                                <ThumbUpIcon htmlColor='blue' className="post-icon" onClick={handleLike} />
                            ) : (<ThumbUpOutlinedIcon htmlColor='blue' className="post-icon" onClick={handleLike} />)
                        }

                        <span className="post-icon-text">{like.count}</span>
                    </div>

                    <div className="post-icon-wrapper">
                        {
                            love.isLove ? (
                                <FavoriteOutlinedIcon htmlColor='red' className="post-icon" onClick={handleLove} />
                            ) : (<FavoriteBorderOutlinedIcon htmlColor='red' className="post-icon" onClick={handleLove} />)
                        }
                        <span className="post-icon-text">{love.count}</span>
                    </div>
                </div>

                <div className="post-comment">
                    <span> {data.commentCount} {data.commentCount === 1 ? "Comment" : "Comments"} </span>
                </div>
            </div>
        </div>
    )
}
