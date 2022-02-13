import React from 'react';
import PostsList from '../PostsList';

const Home = ({posts,user}) => {
  return (
    <div>
<h1>Home</h1>
<PostsList postData={posts} user={user}/>

    </div>
    );
};

export default Home;
