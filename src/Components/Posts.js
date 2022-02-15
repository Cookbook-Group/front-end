import React from 'react';
import PostsList from './PostsList';

const Posts = ({postData,user,setPosts}) => {
  return <div>Posts
    <PostsList postData={postData} user={user} setPosts={setPosts}/>

  </div>;
};

export default Posts;
