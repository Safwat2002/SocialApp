import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { default as DefaultImage } from '../../assets/imgs/icons/default.jpg';
import { refreshData } from '../../redux/userSlice';
import './edit-profile-img.css';


export default function EditProfileImg({showController}) {
    const [image, setImage] = useState();
    const [newImage, setNewImage] = useState();
    const profilePictureID = useSelector(state => state.user.userData.profilePicture);
    const dispatch = useDispatch()

    const getUserProfileImage = async () => {
        try {
            const res = await axios.get(`/imgs/image/${profilePictureID}`, {
                responseType: 'blob'
            })
            setImage(URL.createObjectURL(res.data));
        } catch (err) { }
    }


    const handleSubmitImage = async (e) => {
        try{
            e.preventDefault();

            const fd = new FormData();
            fd.append("image", newImage);

            const response = await axios.post("/imgs/updateUserImage", fd, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            dispatch(refreshData())
            showController(false)
            alert("Profile Picture Has Been Updated Successfully")
        }catch(err){
            showController(false)
        }
    }

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setNewImage(e.target.files[0])
    }


    useEffect(() => {
        getUserProfileImage();
    }, [])

    return (
        <div className='edit-profile-img'>
            <div className="edit-popup main-box-shadow">
                <CloseIcon className='close-icon' onClick={()=>showController(false)} />

                <div className="edit-profile-img-content">
                <h4 className='edit-profile-img-header'>Update Profile Picture</h4>

                    <label htmlFor="uploadImg">
                        <img src={image ? image : DefaultImage} alt="" className="profile-img" />
                    </label>

                    <label htmlFor="uploadImg" className='button-style'>
                        Select Image
                    </label>

                    <input type="file" name='uploadImg' id='uploadImg' onChange={handleImageChange} />
                </div>

                <button className='button-style update-profile-img' onClick={handleSubmitImage}>Update Profile Picture</button>
            </div>
        </div>
    )
}
