import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
import axios from 'axios';
// import './Post.css'

const ResultsDetails = ({user,setPosts}) => {

    const [post, setPost] = useState({})
    let {id }= useParams()
  
    function getPost() {
      axios.get(`${process.env.REACT_APP_backendURI}posts/${id}`).then((res) => {
        setPost(res.data)
        console.log('hi',res.data)
      })
    }
  
    useEffect(() => {
      getPost()
    },[])
  

      let addLikes = async (post) => {
        let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
          method:'PUT',
          body: JSON.stringify({likes: post.likes + 1}),
          headers: {
            'content-type': 'application/json'
        }
      })
     
      
    }

  return (
    <div>
        <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/feed/${post.userId}`}>
              <img
                className="postProfileImg"
                src={ post ?
                  post.user.profilePicture
                    ?  post.user.profilePicture:
                    "/image/icon_avatar.png" : null
                }
                alt=""
              />
            </Link>
            <Link to={`/feed/${post.userId}`} style={{textDecoration:'none', color:'black'}} >
            <span className="postUsername">{post?post.user.username:null}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
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

        </div>
      </div>
    </div>
    </div>
  )
}

export default ResultsDetails