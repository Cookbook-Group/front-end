import React from 'react';
import Post from './Post';

const PostsList = ({postData}) => {


  return <div>PostsList
      {postData.map((post) =>{
        
         return <Post post={post} key={post.name}/>
      })}
      
  </div>;
};

export default PostsList;
