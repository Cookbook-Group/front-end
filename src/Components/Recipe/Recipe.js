import axios from 'axios'
import React from 'react'
import { useState,useEffect  } from 'react/cjs/react.development'
import '../post/Post.css'

const Recipe = ({post,addLikes}) => {

  return (
    <div className="post">
        <div className="postWrapper">
        {/* <img src= {post.image} alt='post image'/> */}
        <h1>{post.recipes}</h1>
        {/* <p>{recipe.meals.strYoutube}</p> */}
        <p className='title'>'{post.title}'</p>
        <p><strong>Ingredients: </strong>{post.ingredients}</p>
        <p><strong>Instructions: </strong> {post.instructions}</p>
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
  )
}

export default Recipe