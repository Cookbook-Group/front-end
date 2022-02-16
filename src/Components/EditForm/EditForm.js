import React, { useState } from "react"
import axios from "axios"

let EditForm = ({ post }) => {
  const form = {
    image: post.image,
    title: post.title,
    calories: post.calories,
    recipes: post.recipes,
    tags: post.tags,
  }
  const [editForm, setEditForm] = useState(form)

  let handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .put(`${process.env.REACT_APP_backendURI}posts/${post._id}`, editForm)
      .then((res) => {
        console.log(res.data)
        console.log(`Post successfuly updated`)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        

        
        <input className="shareButton" type="submit" value='POST' />
      </form>
    </div>
  )
}

export default EditForm
