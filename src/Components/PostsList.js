import React from 'react';
import Post from './post/Post';

const PostsList = ({postData,user}) => {


  return <div>PostsList
      {postData.map((post) =>{
        
         return <Post post={post} user={user} key={post.name}/>
      })}
      
  </div>;
};

export default PostsList;
