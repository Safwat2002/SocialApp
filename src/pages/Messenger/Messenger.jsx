import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatOnlineFriends, Conversation, Message, Topbar } from '../../components';
import './messenger.css';


export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState();
    const [messages, setMessages] = useState();
    const [text, setText] = useState();
    const scrollRef = useRef();

    const profileId = useSelector(state => state.user.userData._id);

    const getConversations = async () => {
        try {
            const res = await axios.get("/conversations/all");
            setConversations(res.data);
        } catch (err) { }
    }

    const getMessages = async () => {
        try {
            const res = await axios.get(`/messages/all/${currentChat}`)
            setMessages(res.data);
        } catch (err) { }
    }

    const handleSendMessage = async () => {
        try{
            if(!text){
                throw Error("")
            }
            const payload = {
                SenderId:profileId,
                conversationId:currentChat,
                text
            }
            const res = await axios.post(`/messages`, payload)
            setMessages((prev)=>[...prev, res.data.newMessage ])
            setText("");
            
        }catch(err){}
    }

    useEffect(() => {
        getConversations();
    }, [])


    useEffect(() => {
        if (currentChat) {
            getMessages();
        }
    }, [currentChat])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({
            behavior:"smooth"
        })
    }, [messages])


    return (
        <>
            <Topbar />
            <div className='messenger-page'>

                {/**
                 * display the set of chats that you've made with other people (your chats only)
                */}
                <div className="chat-menu">
                    <div className="chat-menu-wrapper">
                        <input type="text" name="searchConversation" id="searchConversation" className="search-conversation" placeholder='Search For a Friend' />

                        <div className="conversations-container">

                            {
                                conversations.map((conversation) => <Conversation key={conversation._id} conversation={conversation} setCurrentChat={setCurrentChat} />)
                            }

                        </div>
                    </div>
                </div>


                {/**
                 * this section is concerned about designing the chat messages viewer with input
                 * for writing a message with sending button to perform send Message Action
                */}
                <div className="chat-box">

                    {
                        messages ? (
                            <>
                                <div className="chat-box-top">
                                    {
                                        messages.map((message) =>(
                                            <div ref={scrollRef}  key={message._id}>
                                                <Message message={message} own={message.senderId === profileId} />
                                            </div>
                                        ))
                                    }

                                </div>

                                <div className="chat-box-bottom">
                                    <textarea name="chatMessageInput" value={text} className='chat-message-input' placeholder='Write Message ...' onChange={(e)=>setText(e.target.value)}></textarea>
                                    <button className='chatSubmitButton button-style' onClick={handleSendMessage}>Send</button>
                                </div></>
                        ) : (

                            <div className='chat-box-default-message'>Click On A Chat To Display Messages</div>
                        )
                    }

                </div>


                {/**
                 * showing online friends
                */}
                <div className="online-friends">
                    <div className="online-friends-wrapper">
                        <ChatOnlineFriends />
                    </div>
                </div>
            </div>
        </>
    )
}
