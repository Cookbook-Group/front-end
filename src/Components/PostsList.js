import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from './post/Post';
import axios from 'axios';


const PostsList = ({postData,user,setPosts}) => {


  return <div>
      {postData.map((post) =>{
         return <Post post={post} user={user} setPosts={setPosts} key={post.title} />
      })}
      
  </div>;
};

export default PostsList;
