import React from 'react';
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
import { useState,useEffect } from 'react/cjs/react.development';
import './Post.css'
import Popup from '../PopUp/Popup';
import Recipe from '../Recipe/Recipe';
import axios from 'axios';




const Post = ({post,user,setPosts}) => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  let deletePost = async (post) => {
    if (post.userId === user._id) {
      let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
      method:'DELETE',
      body:null,
      headers: {
        'content-type': 'application/json'
    }
    })
    let allPosts = await data.json()
    alert('Your post had been deleted.')
    if (allPosts) {
    setPosts(
      allPosts.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    )}
    } else {
      alert('You can only delete your own post.')
    }
  }

  let addLikes = async (post) => {
    let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
      method:'PUT',
      body: JSON.stringify({likes: post.likes + 1}),
      headers: {
        'content-type': 'application/json'
    }
  })
  let allPosts = await data.json()
  if(allPosts){
    setPosts(
      allPosts.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
      )
  }
}



  return (
  <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <Link to={`/feed/${post.userId}`}> */}
              <img
                className="postProfileImg"
                src={ post ?
                  post.user.profilePicture
                    ?  post.user.profilePicture:
                    "/image/icon_avatar.png" : null
                }
                alt=""
              />
            {/* </Link> */}
            <span className="postUsername">{post?post.user.username:null}</span>
            <span className="postDate">{format(post.createdAt)}</span>
            <button onClick={() => deletePost(post)}>Delete</button>
            
            <Link to={{pathname: `posts/${post._id}/edit`}}>Edit</Link>

          </div>
          <div className="postTopRight">
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.image} alt="" />
          <h2>{post.title}</h2>
          <h4>Calories: {post.calories}</h4>
          <h4>{post.tags}</h4>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src='/image/icon_like.png'
              onClick={() => addLikes(post)}
              alt=""
            />
            <span className="postLikeCounter">{post.likes} people like it</span>
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
