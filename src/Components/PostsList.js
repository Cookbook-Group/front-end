import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from './post/Post';
import axios from 'axios';

const PostsList = ({postData,user,setPosts, getData}) => {

  return <div>
      {postData.map((post) =>{
        
         return <Post post={post} user={user} setPosts={setPosts} key={post.name} getData={getData}/>
      })}
      
  </div>;
};

export default PostsList;
