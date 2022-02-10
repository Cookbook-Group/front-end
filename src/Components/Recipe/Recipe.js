import React from 'react'

const Recipe = () => {
  return (
    <div>
        <div className="card">
        <button>X</button>
        <img src= '{user.post.image}' alt='post image'/>
        <h3>post.name</h3>
        <p>post.comments</p>
        <p>post.recipe</p>
        <p>likes/ratings</p>
        </div>
    </div>
  )
}

export default Recipe