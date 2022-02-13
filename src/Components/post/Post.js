import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post,user,likeHandler,like}) => {

  return <div>
    {/* <header>
      <img src='' alt='profile avatar'/> <p>by user.name</p>
      <p>post time at post location</p>
    </header>
    <hr></hr>
    <img src={post.image} alt='food'/>
    <h3>{post.name}</h3>
    <p>Likes: {post.likes}</p>
    <p>tags: {post.tags}</p>
    <p>post.comments</p> */}
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <Link to={`/profile/${user.username}`}> */}
              <img
                className="postProfileImg"
                // src={
                //   user.profilePicture
                //     ?  user.profilePicture
                //     : "person/noAvatar.png"
                // }
                alt=""
              />
            {/* </Link> */}
            <span className="postUsername">by user.username</span>
            <span className="postDate">{
            // format
            (post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            {/* <MoreVert /> */}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.image} alt="" />
          <h2>{post.title}</h2>
          <h4>Calories: {post.calories}</h4>
          <h4>Tag: {post.tag}</h4>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.recipe}Recipe</span>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Post;
