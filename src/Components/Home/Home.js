import React from 'react';
import PostsList from '../PostsList';
import New from '../New/New';

<<<<<<< HEAD
const Home = ({posts,user,addPost,setPosts}) => {
=======
const Home = ({posts,user,addPost}) => {
>>>>>>> 0c97d53 (delete post is now working and update sign in auth and update some page layout)
  return (
    <div>
<h1>Home</h1>
<New addPost={addPost} user={user}/>
<<<<<<< HEAD
<PostsList postData={posts} user={user} setPosts={setPosts}/>
=======
<PostsList postData={posts} user={user}/>
>>>>>>> 0c97d53 (delete post is now working and update sign in auth and update some page layout)

    </div>
    );
};

export default Home;
