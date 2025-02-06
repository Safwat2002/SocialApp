import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Person from '../../assets/imgs/icons/default.jpg';
import './conversation.css';

export default function Conversation({conversation, setCurrentChat}) {

    const [owner, setOwner] = useState();
    const [ownerImg, setOwnerImg] = useState();

    const profileId = useSelector(state=>state.user.userData._id);
    const friendId = conversation.members.filter((member)=>member !== profileId)

    const getConversationOwner = async () => {
        try{

            const res = await axios.get(`users/${friendId}`)
            setOwner(res.data)
    
            if(res.data.profilePicture){
                const img = await axios.get(`/imgs/image/${res.data.profilePicture}`, {
                    responseType:'blob'
                })
                setOwnerImg(URL.createObjectURL(img.data));
            }
        }catch(err){}
    }

    const handleConversationClick = () => {
        setCurrentChat(conversation._id)
    }

    useEffect(()=>{
        getConversationOwner();
    },[])

    return (
        <div className='conversation' onClick={handleConversationClick}>
            <img src={ownerImg ? ownerImg : Person} alt="Person" className='iconic-img conversation-img'/>
            <div className="conversation-name">{owner ? owner.fullName : ""}</div>
        </div>
    )
}
