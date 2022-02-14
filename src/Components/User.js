import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

const User = ({ setFoundUser, foundUser, users }) => {
  const params = useParams()
  console.log(params.userId)
  console.log(`${process.env.REACT_APP_backendURI}users/${params.userId}`)
  
  function getUser() {
    axios.get(`${process.env.REACT_APP_backendURI}users/${params.userId}`)
    .then((res) => {
      console.log(res)
      setFoundUser(res.data)
    })
  }

  useEffect((getUser) => {
    getUser()
  }, [])

 console.log(foundUser)

  return (
    <div>
      <header>
        <img src="" alt="" />
        <h4>{foundUser.username}</h4>
        {/* Below code only lists the number of posts, mapping the data is found lower */}
        <p>{foundUser.posts} posts</p>
        <p>{foundUser.followers} followers</p>
        <p>{foundUser.following} following</p>
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
