import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from '../post/Post';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Feed.css'

import UserAllRecipes from '../UserAllRecipes/UserAllRecipes';
import UserRecipes from '../UserRecipes/UserRecipes';


const Feed = ({post,user,setPosts}) => {

  const [userProfile, setUserProfile] = useState({})
  let {id }= useParams()

  function getUserProfile() {
    axios.get(`${process.env.REACT_APP_backendURI}users/${id}`).then((res) => {
      setUserProfile(res.data)
      console.log('hi',res.data)
    })
  }

  useEffect(() => {
    getUserProfile()
  },[])

  let userPosts = post.filter((post) => {
    return  post.userId === userProfile._id
    
  })
console.log(userPosts)
  

  return (
    <div>
       <div className="profile">
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
              <img
                className="profileUserImg"
                src={
                  userProfile.profilePicture
                    ?  userProfile.profilePicture:
                    "/image/icon_avatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{userProfile.username}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div>
      <UserAllRecipes posts={userPosts} user={userProfile} setPosts={setPosts} currentUser={user}/>
    </div>
  );
};

export default Feed;
