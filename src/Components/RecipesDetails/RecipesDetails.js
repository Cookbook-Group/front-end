import React from 'react'
import'./RecipesDetail.css'

const RecipesDetails = ({post}) => {
  return (
    <div>
        <img className='details-image'
        src={post.image} 
        alt="food"/>
        <p>{post.title}</p>
        <p>{post.recipes}</p> 
                 
    </div>
  )
}

export default RecipesDetails