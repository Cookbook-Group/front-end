import React from 'react';
import PostsList from '../PostsList';
import New from '../New/New';


const Home = ({posts,user,addPost,setPosts, uploadedImageUrl, setUploadedImageUrl}) => {

  return (
    <div>

<New addPost={addPost} user={user} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>

<PostsList postData={posts} user={user} setPosts={setPosts}/>


    </div>
    );
};

export default Home;
