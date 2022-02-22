import React, { useState, useEffect } from "react"
import EditForm from "../EditForm/EditForm"
import { useParams } from "react-router-dom"
import axios from "axios"

const Edit = ({setPosts, user}) => {

  const [post, setPost] = useState({})
  let {id }= useParams()

  function getPost() {
    axios.get(`${process.env.REACT_APP_backendURI}posts/${id}`).then((res) => {
      setPost(res.data)
    })
  }

  useEffect(() => {
    getPost()
  },[])

  return <EditForm post={post} setPosts={setPosts} user={user} />
}

export default Edit
