import React from 'react';

const Post = ({post}) => {
  return <div>
    <header>
      <img src='' alt='profile avatar'/> <p>by user.name</p>
      <p>post time at post location</p>
    </header>
    <hr></hr>
    <img src='' alt='food'/>
    <h3>post.name</h3>
    <p>likes/ratings</p>
    <p>post.comments</p>
  </div>
};

export default Post;
