import React from 'react'
import UserRecipes from '../UserRecipes/UserRecipes'
import './UserAllRecipes.css'


const UserAllRecipes = ({posts,user,setPosts,currentUser}) => {
  return (
    <div className='container'>

        {posts.map((post) =>{
            return <UserRecipes post={post} key={post.title} user={user} setPosts={setPosts} currentUser={currentUser}/>
        })}
     
    </div>
  )
}

export default UserAllRecipes