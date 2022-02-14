import axios from 'axios'
import React from 'react'
import { useState,useEffect  } from 'react/cjs/react.development'
import '../post/Post.css'

const Recipe = ({post}) => {
  // const [recipe,setRecipe] =useState()

  // const fetchRecipe =() => {
  //  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${post.title}`)
  //   .then(res => setRecipe(res.data))
  // }

  // useEffect(() => {
  //   fetchRecipe()
  // },[recipe])

  return (
    <div className="post">
        <div className="postWrapper">
        {/* <img src= {post.image} alt='post image'/> */}
        <h3>{post.title}</h3>
        {/* <p>{recipe.meals.strYoutube}</p> */}
        <p>{post.recipes}</p>
        <p>{post.likes}</p>
        </div>
    </div>
  )
}

export default Recipe