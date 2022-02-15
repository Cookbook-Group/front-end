import React from 'react';
import PostsList from './PostsList';

<<<<<<< HEAD
const Posts = ({postData,user,setPosts,getData}) => {
  return <div>Posts
    <PostsList postData={postData} user={user} setPosts={setPosts} getData={getData}/>
=======
const Posts = ({postData,user,setPosts}) => {
  return <div>Posts
    <PostsList postData={postData} user={user} setPosts={setPosts}/>
>>>>>>> 0c97d53 (delete post is now working and update sign in auth and update some page layout)

  </div>;
};

export default Posts;
