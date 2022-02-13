import React from 'react';
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
import { useState } from 'react/cjs/react.development';
import './Post.css'
import Popup from '../PopUp/Popup';
import Recipe from '../Recipe/Recipe';



const Post = ({post,user,likeHandler,like}) => {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
  <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <Link to={`/profile/${user.username}`}> */}
              <img
                className="postProfileImg"
                src="image/icon_avatar.png"
                // src={
                //   user.profilePicture
                //     ?  user.profilePicture:
                //     "image/icon_avatar.png"
                // }
                alt=""
              />
            {/* </Link> */}
            <span className="postUsername">by user.username</span>
            <span className="postDate">{format(post.createdAt)}</span>
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
              src='image/icon_like.png'
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText" type="button" onClick={togglePopup}>Recipe</span>
            {isOpen && <Popup
            content={<Recipe post={post}/>}
            handleClose={togglePopup}
            />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Post;
