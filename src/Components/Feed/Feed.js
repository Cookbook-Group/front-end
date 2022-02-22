import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Follow from '../Follow/Follow';
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar/SideBar';
import './Feed.css'
import UserAllRecipes from '../UserAllRecipes/UserAllRecipes';



const Feed = ({post,user,setPosts, setUser}) => {

  const [isOpen , setIsOpen] = useState(false)
  const togglePopup = () =>{
    setIsOpen(!isOpen)
  }

  const navigate = useNavigate()
  const [userProfile, setUserProfile] = useState({})
  let {id }= useParams()

  function getUserProfile() {
    axios.get(`${process.env.REACT_APP_backendURI}users/${id}`).then((res) => {
      setUserProfile(res.data)
    })
  }

  useEffect(() => {
    getUserProfile()
  },[id])


  let userPosts = post.filter((post) => {
    return  post.userId === userProfile._id
    
  })


const [follow, setFollow] = useState(user.followings.includes(userProfile?._id))

const handleClickUnfollow = async (e) => {
    try {
        if (follow) {
            await axios.put(`${process.env.REACT_APP_backendURI}users/${id}/unfollow`,{
                userId: user._id
            })
            .then((unfollow) => {
                navigate(`/`)
            })
        } setFollow(!follow) 
      } catch (err) {
        console(err)
    } 
    
}

const handleClickFollow = async (e) => {
  try {
    if (!follow) {
      await axios.put(`${process.env.REACT_APP_backendURI}users/${id}/follow`,{
        userId: user._id
       })
       .then((follow) => {
        navigate(`/`)
       })
    } setFollow(follow)
  } catch (err) {
    console.log(err)
  }
}
       

  return (
    <div className='grid-container'>
      <div className='box1'>
       <div className="profile ">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={ userProfile.coverPicture
                  ?  userProfile.coverPicture:
                  "/image/foodCover.jpeg"}
                alt=""
              />
              {
                user._id === userProfile._id ?
              <Link to={`/profile/${user._id}`}>
              <img 
                className="profileUserImg"
                src={
                  userProfile.profilePicture
                    ?  userProfile.profilePicture:
                    "/image/icon_avatar.png"
                }
                alt=""
              /></Link> : 
              <img 
                className="profileUserImg"
                src={
                  userProfile.profilePicture
                    ?  userProfile.profilePicture:
                    "/image/icon_avatar.png"
                }
                alt=""
              />
              }
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{userProfile.username}</h4>
              {
                userProfile._id !== user._id ?
                   <Follow handleClickFollow={handleClickFollow} handleClickUnfollow={handleClickUnfollow} user={user} userProfile={userProfile} follow={follow}/> : null
              }
            </div>
          </div>
          </div>
          </div>
          </div>
          <div className='box2' >
          <SideBar currentUser={user} userProfile={userProfile} setUserProfile={setUserProfile} />
          </div>
          <div className='box3'>
        <UserAllRecipes posts={userPosts} user={userProfile} setPosts={setPosts} currentUser={user}/> 
    </div>
    </div>
  );
};

export default Feed;
