import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { default as DefaultImg } from '../../assets/imgs/icons/default.jpg'
import { default as DefaultCover } from '../../assets/imgs/icons/default_cover.jpg'
import { EditCoverImg, EditProfileImg, Feed, Leftbar, Post, Rightbar, Topbar } from '../../components'
import { refreshData } from '../../redux/userSlice'
import './profile.css'

export default function Profile() {

    const profileData = useSelector(state=>state.user.userData);

    const [showEditProfileImgPopup, setShowEditProfileImgPopup] = useState(false);
    const [showEditCoverImgPopup, setShowEditCoverImgPopup] = useState(false);
    const [posts, setPosts] = useState([]);
    const [profileImg, setProfileImg] = useState();
    const [coverImg, setCoverImg] = useState();
    const [isDescriptionFieldDisabled, setIsDescriptionFieldDisabled] = useState(true); // Track the disabled state
    const [description, setDescription] = useState(profileData.description)
    const [rerenderProfilePosts, setReRenderProfilePosts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const descriptionField = useRef(null);
    const dispatch = useDispatch();

    const getPosts = async()=>{
        setIsLoading(true);
        const res = await axios.get(`/posts/${profileData._id}/allPosts`)
        setPosts(res.data);
        setIsLoading(false);
    }

    const getProfileImage = async () => {
        try{
            const res = await axios.get("/imgs/userImage",{
                responseType:'blob'
            })
            setProfileImg(URL.createObjectURL(res.data))
        }catch(err){}
    }

    const getProfileCover = async () => {
        try{
            const res = await axios.get("/imgs/userCover",{
                responseType:'blob'
            })
            setCoverImg(URL.createObjectURL(res.data))
        }catch(err){}
    }

    const handleEditBio = async (e) => {
        try{
            if(e.target.value === "editBio"){
                e.target.value = "updateBio"
            }else{
                if(description !== profileData.description){
                    await axios.put('/users/', {
                        description
                    })
                    dispatch(refreshData())
                    e.target.value = "editBio"
                }
            }
            descriptionField.current.disabled = !isDescriptionFieldDisabled;
            descriptionField.current.classList.toggle("main-box-shadow")
            setIsDescriptionFieldDisabled(prev=>!prev);
        }catch(err){
            alert("Something Went Error Profile.jsx Page HandleEditBio() function")
        }

    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    useEffect(()=>{
        getPosts()
    },[rerenderProfilePosts])
    
    useEffect(()=>{
        getProfileCover()
    },[profileData.profileCover])
    
    useEffect(()=>{
        getProfileImage()
    },[profileData.profilePicture])


    return (
        <div className='profile-page'>
            <Topbar />

            <div className="profile-content">
                {showEditProfileImgPopup ? <EditProfileImg showController={setShowEditProfileImgPopup} /> : ""}
                {showEditCoverImgPopup ? <EditCoverImg showController={setShowEditCoverImgPopup} /> : ""}
                <Leftbar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-imgs">

                            <div className="profile-cover-img">
                                <img src={coverImg ? coverImg : DefaultCover} alt="" className="profile-cover-img" />
                                <button className='button-style' onClick={()=>setShowEditCoverImgPopup(true)}>Update Cover Photo</button>
                            </div>

                            <div className="profile-img-container" onClick={()=>setShowEditProfileImgPopup(true)}>
                                <img src={profileImg ? profileImg : DefaultImg} alt="" className="profile-img" />
                                <div className="profile-img-overlap">
                                    <AddPhotoAlternateIcon style={{fontSize:"50px"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="profile-info">
                            <h4 className="profile-info-name">{profileData.fullName} <EditIcon className='user-fullName-edit-icon' title={"Will Be Added Later"}/></h4>
                            <textarea className="profile-info-desc" aria-rowcount={100} type="text" disabled ref={descriptionField} onChange={handleDescriptionChange}>
                                {description}
                            </textarea>

                            <button value={"editBio"} className='button-style bio-button' onClick={handleEditBio}>
                                {isDescriptionFieldDisabled ? "Edit Bio" : "Update Bio"}
                            </button>
                        </div>
                    </div>

                    <div className="profile-right-bottom">
                        <Feed rerender={setReRenderProfilePosts} isLoading={isLoading}>
                            {
                                posts.length > 0?
                                posts.map((post)=>{
                                    const isLike = post.likes.includes(profileData._id)
                                    const isLove = post.loves.includes(profileData._id)
                                    const LoveCount = post.loves.length
                                    const LikeCount = post.likes.length
                                    const date = new Date(post.createdAt)
                                    const string_date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
                                    return <Post key={post._id} data={{...post, userImg:profileImg, userFullName: profileData.fullName, commentCount:30, date:string_date, isLike, isLove, LoveCount, LikeCount}} />
                                }):
                                (
                                    <h4>You Didn't Post Anything Yet</h4>
                                )
                            }
                        </Feed>
                    </div>
                </div>

                <Rightbar profile/>
            </div>

        </div>
    )
}
