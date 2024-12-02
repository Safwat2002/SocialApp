import { MoreVert } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import './post.css';

export default function Post({data}) {



    const [like, setLike] = useState({ isLike: data.isLike, count: data.LikeCount });
    const [love, setLove] = useState({ isLove: data.isLove, count: data.LoveCount });

    const handleLike = () => {
        like.isLike ? setLike({ isLike: !like.isLike, count: like.count - 1 }) :
        setLike({ isLike: !like.isLike, count: like.count + 1 });
        
        love.isLove && setLove({ isLove: !love.isLove, count: love.count - 1 });
    }

    const handleLove = () => {
        love.isLove ? setLove({ isLove: !love.isLove, count: love.count - 1 }) :
        setLove({ isLove: !love.isLove, count: love.count + 1 });
        
        like.isLike && setLike({ isLike: !like.isLike, count: like.count - 1 });
    }

    return (
        <div className='post main-box-shadow'>

            <div className="post-top">
                <div className="post-top-left">
                    <img src={data.userImg} alt="Profile" className='post-top-img iconic-img' />
                    <span className="post-top-username">{data.username}</span>
                    <span className="post-top-date">{data.date}</span>
                </div>
                <div className="post-top-right">
                    <MoreVert />
                </div>
            </div>
            <div className="post-center">
                <div className="post-text">{data.postText}</div>
                <img src={data.postImg} alt="" className='post-img' />
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
                    <span> {data.commentCount} {data.commentCount == 1 ? "Comment" : "Comments"} </span>
                </div>
            </div>
        </div>
    )
}
