import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from '../post/Post';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Feed.css'

import UserAllRecipes from '../UserAllRecipes/UserAllRecipes';
import UserRecipes from '../UserRecipes/UserRecipes';


const Feed = ({post,user}) => {

  let userPosts = post.filter((post) => {
    return  post.userId === user._id
    
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
                src={ user.coverPicture
                  ?  user.coverPicture:
                  "/image/foodCover.jpeg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ?  user.profilePicture:
                    "/image/icon_avatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div>
      <UserAllRecipes posts={userPosts} user={user}/>
      {/* <UserRecipes posts={userPosts} user={user}/> */}
    </div>
  );
};

export default Feed;
