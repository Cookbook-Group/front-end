import React from 'react';
import PostsList from './PostsList';

const Posts = ({postData}) => {
  return <div>Posts
    <PostsList postData={postData}/>

  </div>;
};

export default Posts;
