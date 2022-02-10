import React from "react"
import { Link } from "react-router-dom"

const User = ({ user }) => {
  
    
  return (
    <div>
      <header>
        <img src="" alt="" />
        <h4>{user.name}</h4>
        {/* Below code only lists the number of posts, mapping the data is found lower */}
        <p>{user.posts.length} posts</p>
        <p>{user.followers}  followers</p>
        <p>{user.following} following</p>
        <hr></hr>
      </header>

      {/* {user.posts.map((post) => {
        return (
          <div>
            <Link to="">
              <img src={post} alt="" />
            </Link>
          </div>
        )
      })} */}
    </div>
  )
}

export default User
