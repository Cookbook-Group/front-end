import React from 'react';
import PostsList from '../PostsList';
import New from '../New/New';

const Home = ({posts,user,addPost,setPosts}) => {
  return (
    <div>
<h1>Home</h1>
<New addPost={addPost} user={user}/>
<PostsList postData={posts} user={user} setPosts={setPosts}/>

    </div>
    );
};

export default Home;
