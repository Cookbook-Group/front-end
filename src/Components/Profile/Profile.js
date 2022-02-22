import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Popup from '../PopUp/Popup'
import Uploads from '../Uploads/Uploads'
import CoverProfile from './CoverProfile'

const Profile = ({user,setUser,setUserProfile, uploadedImageUrl, setUploadedImageUrl}) => {
    
    const [isOpen , setIsOpen] = useState(false)
    let [editUserPic, setEditUserPic] = useState({user})
    const navigate = useNavigate()
    let {id }= useParams()

  const togglePopup = () =>{
    setIsOpen(!isOpen)
  }

  let handleChange = (e) =>{
    setEditUserPic({
			...editUserPic,[e.target.id]: e.target.value
		})
    }

  let handleSubmit = (e) => {
      e.preventDefault()
      axios.put(`${process.env.REACT_APP_backendURI}users/${id}`, {
        profilePicture: uploadedImageUrl
      })
      .then((res) => {
          setUser(res.data)
          setEditUserPic('')
          togglePopup()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
    <h1 style={{marginBottom:'50px'}}>Update Your Profile</h1>
    <div style={{marginBottom:'50px'}}>
    <Uploads uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
    </div>
      <div className="profile ">
        <div className="profileRight">
          <div className="profileRightTop">
          <div className="profileCover">
            <CoverProfile user={user} setUser={setUser} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
              <img style={{cursor:'pointer'}}
               type="button"
               onClick={togglePopup}
                className="profileUserImg"
                src={
                  user.profilePicture
                    ?  user.profilePicture:
                    "/image/icon_avatar.png"
                }
                alt=""
              />
            </div>
            </div>
            </div>
            </div>
      <form onSubmit={handleSubmit} afterSubmit={() => navigate('/feed/:id')}>
          
       {isOpen && <Popup 
            content={
                <div>
                <b>Add Profile Picture</b>
                <hr className="shareHr"/>
                <div className="shareTop">
                  <img className="shareProfileImg" src={user.profilePicture
                    ?  user.profilePicture:
                    "/image/icon_avatar.png"} alt="" />
                  <input 
                    placeholder ="Add New Profile Picture"
                    className="shareInput"
                    onChange ={handleChange} 
                    type='text'
                    name='profilePicture'
                    id='profilePicture'
                    value={uploadedImageUrl}/>
                </div>

                <input className="shareButton" type="submit" value='POST'  />
                </div>
            }
            handleClose={togglePopup}
       />}
      </form>
      </>
  )
}

export default Profile