import React from 'react';
import PostsList from '../PostsList';
import New from '../New/New';

const Home = ({posts,user,addPost}) => {
  return (
    <div>
<h1>Home</h1>
<New addPost={addPost} user={user}/>
<PostsList postData={posts} user={user}/>

    </div>
    );
};

export default Home;
