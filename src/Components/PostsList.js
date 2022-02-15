import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from './post/Post';
import axios from 'axios';

<<<<<<< HEAD
const PostsList = ({postData,user,setPosts, getData}) => {
=======
const PostsList = ({postData,user,setPosts}) => {
>>>>>>> 0c97d53 (delete post is now working and update sign in auth and update some page layout)

  return <div>
      {postData.map((post) =>{
        
<<<<<<< HEAD
         return <Post post={post} user={user} setPosts={setPosts} key={post.name} getData={getData}/>
=======
         return <Post post={post} user={user} setPosts={setPosts} key={post.name}/>
>>>>>>> 0c97d53 (delete post is now working and update sign in auth and update some page layout)
      })}
      
  </div>;
};

export default PostsList;
