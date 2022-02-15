import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Post from '../post/Post';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Feed = ({post,user,likeHandler,like}) => {
  
  const [currentUser, setCurrentUser] = useState()
  // const [currentUserPosts, setCurrentUserPosts] = useState
  const { id } = useParams()

  let getCurrentUser = () => {
    axios.get(`${process.env.REACT_APP_backendURI}users/${id}`)
    .then((res) => {
      console.log(res.data)
      setCurrentUser(res.data)
    })
  }

  // let getCurrentUserPosts = () => {
  //   axios.get(`${process.env.REACT_APP_backendURI}posts/profile/${id}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     setCurrentUserPosts(res.data)
  //   })
  // }

  useEffect(() => {
    getCurrentUser()
    // getCurrentUserPosts()
  }, [])

  
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`${process.env.REACT_APP_backendURI}posts/${post._id}`);
  //     setCurrentUser(res.data);
  //     console.log(user)
  //     console.log(post.userId)
  //     console.log(res.data)
  //   };
  //   fetchUser();
  // },[post.userId]);

  // let deletePost = async (post) => {
  //   if (post.userId === user.id) {
  //      let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
  //     method:'DELETE',
  //     body:null,
  //     headers: {
  //       'content-type': 'application/json'
  //   }
  //   })
  //   let allPosts = await data.json()
  //   if (allPosts) {
  //     setPosts(allPosts)
  //   }
  //   } else {
  //     alert('You can only delete your own post.')
  //   }
  // }
  

  return (
    <div>
        <h1>Feed</h1>
       <h1>{currentUser? currentUser.username : null}</h1>
        <Post post={post} user={user} />
    </div>
  );
};

export default Feed;
