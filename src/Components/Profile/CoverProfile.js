import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Popup from '../PopUp/Popup'

const CoverProfile = ({user,setUser,setUserProfile, uploadedImageUrl, setUploadedImageUrl}) => {
    const [isOpen , setIsOpen] = useState(false)
    let [editUserCover, setEditUserCover] = useState({user})
    const navigate = useNavigate()
    let {id }= useParams()

  const togglePopup = () =>{
    setIsOpen(!isOpen)
  }

  let handleChange = (e) =>{
    setEditUserCover({
			...editUserCover,[e.target.id]: e.target.value
		})
    }

  let handleSubmit = (e) => {
      e.preventDefault()
      axios.put(`${process.env.REACT_APP_backendURI}users/${id}`, {
        coverPicture: uploadedImageUrl
      })
      .then((res) => {
          setUser(res.data)
          setEditUserCover('')
          togglePopup()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
              <img
              type="button"
              onClick={togglePopup}
                className="profileCoverImg"
                src={ user.coverPicture
                  ?  user.coverPicture:
                  "/image/foodCover.jpeg"}
                alt=""
              />
              <form onSubmit={handleSubmit} afterSubmit={() => navigate('/feed/:id')}>
          
          {isOpen && <Popup 
               content={
                   <div>
                   <b>Add Cover Picture</b>
                   <hr className="shareHr"/>
                   <div className="shareTop">
                     <img className="shareProfileImg" src={user.profilePicture
                       ?  user.profilePicture:
                       "/image/icon_avatar.png"} alt="" />
                     <input 
                       placeholder ="Add New Cover Picture"
                       className="shareInput"
                       onChange ={handleChange} 
                       type='text'
                       name='coverPicture'
                       id='coverPicture'
                       value={uploadedImageUrl}/>
                   </div>
   
                   <input className="shareButton" type="submit" value='POST'  />
                   </div>
               }
               handleClose={togglePopup}
          />}
         </form>
    </div>
  )
}

export default CoverProfile