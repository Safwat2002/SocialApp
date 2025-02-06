import { EmojiEmotions, Label, PermMedia, Person, Room} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import PersonImage from '../../assets/imgs/peopleImgs/person1.jpg';
import './share-box.css';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


export default function ShareBox({rerender}) {

    const [postText, setPostText] = useState("");
    const [postImg, setPostImg] = useState();


    const handleShare = async () => {
        try{

            const fd = new FormData();
            fd.append('image', postImg)
            fd.append('description', postText);

            const res = await axios.post("/posts/", fd)
            alert(res.data.message)
            setPostImg(null)
            setPostText("")
            rerender(prev=>!prev);

        }catch(err){

        }
    }

    return (
        <div className='share-container main-box-shadow'>
            <div className="share-wrapper">
                <div className="share-top">
                    <img src={PersonImage} alt="Profile" className='share-top-img iconic-img' />
                    <input type="text" value={postText} placeholder="What's in your mind?" className="share-input" onChange={(e)=>setPostText(e.target.value)} />
                </div>

                <div className="share-box-img-container" style={{display:postImg ? "block" : "none"}}>
                    <CloseIcon className='close-icon' onClick={()=>{setPostImg(null)}} />
                    <hr className="share-hr" />
                    <img src={postImg?URL.createObjectURL(postImg): ""} alt="" className='post-img share-box-img'/>
                    <input type="file" name="postImg" id="postImg" onChange={(e)=>setPostImg(e.target.files[0])}/>
                </div>
                
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <label htmlFor="postImg" className="share-option">
                            <PermMedia htmlColor='tomato' className="share-icon" />
                            <span className="share-option-text">Photo Or Video</span>
                        </label>
                        <div className="share-option">
                            <Label htmlColor='green' className="share-icon" />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor='blue' className="share-icon" />
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor='goldenrod' className="share-icon" />
                            <span className="share-option-text">Feelings</span>
                        </div>

                    </div>
                    <button className="button-style" onClick={handleShare}>Share</button>
                </div>
            </div>
        </div>
    )
}
