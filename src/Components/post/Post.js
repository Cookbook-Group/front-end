import React from 'react';
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
import { useState,useEffect } from 'react/cjs/react.development';
import './Post.css'
import Popup from '../PopUp/Popup';
import Recipe from '../Recipe/Recipe';
import axios from 'axios';



const Post = ({post,user,likeHandler,like, setPosts , getData}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState()

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`${process.env.REACT_APP_backendURI}users/${post.userId}`);
  //     setCurrentUser(res.data);
  //     console.log(user)
  //     console.log(post.userId)
  //     console.log(res.data)
  //   };
  //   fetchUser();
  // },[post.userId]);


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
    setPosts(allPosts)
    // getData()
    }
    } else {
      alert('You can only delete your own post.')
    }
  }

//   let updatePost = async (post) => {
//     let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`, {
//       method: 'PUT',
//       body: JSON.stringify({new:true}),
//       headers: {
//           'content-type': 'application/json'
//       }
//   })
// let allPosts = await data.json()
// if (allPosts) {
//     setPosts(allPosts)

//     }
//   }


  return (
  <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/feed/${user._id}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ?  user.profilePicture:
                    "image/icon_avatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
            <button onClick={() => deletePost(post)}>Delete</button>
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
