import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import PersonImage from '../../assets/imgs/peopleImgs/person1.jpg'
import './share-box.css'

export default function ShareBox() {
    return (
        <div className='share-container main-box-shadow'>
            <div className="share-wrapper">
                <div className="share-top">
                    <img src={PersonImage} alt="Profile" className='share-top-img iconic-img' />
                    <input type="text" placeholder="What's in your mind?" className="share-input" />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor='tomato' className="share-icon" />
                            <span className="share-option-text">Photo Or Video</span>
                        </div>
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
                    <button className="button-style">Share</button>
                </div>
            </div>
        </div>
    )
}
