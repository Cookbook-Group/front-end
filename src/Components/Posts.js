import React from 'react';
import PostsList from './PostsList';

const Posts = ({postData,user}) => {
  return <div>Posts
    <PostsList postData={postData} user={user}/>

  </div>;
};

export default Posts;
