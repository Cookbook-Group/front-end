import React, { useState, useEffect } from "react"
import EditForm from "../EditForm/EditForm"
import { useParams } from "react-router-dom"
import axios from "axios"

const Edit = () => {

  const [post, setPost] = useState({})
  let id = useParams()

  function getPost() {
    axios.get(`${process.env.REACT_APP_backendURI}posts/${id.id}`).then((res) => {
      setPost(res.data)
    })
  }

  useEffect(() => {
    getPost()
  },[])

  return <EditForm post={post} />
}

export default Edit
