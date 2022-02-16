import React from 'react';
import PostsList from './PostsList';


const Posts = ({postData,user,setPosts,getData}) => {
  return <div>Posts
    <PostsList postData={postData} user={user} setPosts={setPosts} getData={getData}/>


  </div>;
};

export default Posts;
