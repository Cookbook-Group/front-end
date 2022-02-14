import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

const User = ({ setFoundUser, foundUser }) => {
  const params = useParams()
  
  function getUser() {
    axios.get(`${process.env.REACT_APP_backendURI}users/${params.userId}`)
    .then((res) => {
      console.log(res)
      setFoundUser(res.data)
    })
  }

  console.log(foundUser)

 useEffect(() => {
    getUser()
  }, [])
 
 return (
    <div>
      <header>
      <h3>USERNAME </h3>

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
