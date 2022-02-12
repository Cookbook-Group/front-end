import React from 'react'

const Recipe = (props) => {
  return (
    <div>
        <div className="card">
        <button>X</button>
        <img src= {props.image} alt='post image'/>
        <h3>{props.name}</h3>
        <p>{props.comments}</p>
        <p>{props.recipe}</p>
        <p>{props.likes}</p>
        </div>
    </div>
  )
}

export default Recipe