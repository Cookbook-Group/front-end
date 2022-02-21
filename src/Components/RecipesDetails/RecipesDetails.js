import React from 'react'
import'./RecipesDetail.css'

const RecipesDetails = ({post}) => {
  return (
    <div>
        <img className='details-image'
        src={post.image} 
        alt="food"/>
        <p>{post.recipes}</p> 
        <p className='title'>'{post.title}'</p>
        <p><strong>Ingredients: </strong>{post.ingredients}</p>
        <p><strong>Instructions: </strong> {post.instructions}</p>
                 
    </div>
  )
}

export default RecipesDetails