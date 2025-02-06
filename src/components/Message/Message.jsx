import Person from '../../assets/imgs/icons/default.jpg'
import './message.css'
import {format} from 'timeago.js'

export default function Message({ own, message }) {
    return (
        <div className={`message ${own ? "own" : ""}`}>
            <div className="message-top">
                <img src={Person} alt="Friend" className='iconic-img' />
                <p className="message-text">{message.text}</p>
            </div>

            <div className="message-bottom">
                {
                    format(message.createdAt)
                }
            </div>
        </div>
    )
}
