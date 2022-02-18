import React from 'react'
import UserRecipes from '../UserRecipes/UserRecipes'
import './UserAllRecipes.css'


const UserAllRecipes = ({posts}) => {
  return (
    <div className='container'>

        {posts.map((post) =>{
            return <UserRecipes post={post} key={post.title}/>
        })}
     
    </div>
  )
}

export default UserAllRecipes