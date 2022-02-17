import React, { useEffect, useState } from "react"
import { Redirect } from 'react-router-dom'
import axios from "axios"

let EditForm = ({ post }) => {


  let [editForm, setEditForm] = useState({post})

  console.log(post._id)
  console.log(editForm)

  let handleSubmit = async (e) => {
    e.preventDefault()
    const res = axios.put(`${process.env.REACT_APP_backendURI}posts/${post._id}`,editForm)
    .then((res) => {
      console.log(res.data)
      console.log('Recipe successfully updated')
    }).catch((error) => {
      console.log(error)
    })
    
  }
  //Changes Database but doesn't reroute yet.

  let handleChange = (e) =>{
    setEditForm({
			...editForm,[e.target.id]: e.target.value
		})
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <b>Edit Your Post</b>
        <hr className="shareHr" />
        <div className="shareTop">
          <img className="shareProfileImg" src="" alt="" />
          <input
            placeholder="What's your MEAL ?"
            className="shareInput"
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            defaultValue={editForm.post.title}
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareInput">
            {/* <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Image" name='image' id='image' type='text' onChange ={handleChange} 
                          defaultValue={editForm.post.image}/>
                      </div> */}

            <div className="shareOption">
              <img className="shareIcon" src="/image/icon_tag.png" alt="icon" />
              <input
                className="shareInput"
                name="tags"
                id="tags"
                type="text"
                placeholder="Add tag #"
                onChange={handleChange}
                defaultValue={editForm.post.tags}
              />
            </div>

            <div className="shareOption">
              <img
                className="shareIcon"
                src="/image/icon_kcal.png"
                alt="icon"
              />
              <input
                className="shareInput"
                name="calories"
                type="text"
                id="calories"
                placeholder="Add Calories"
                onChange={handleChange}
                defaultValue={editForm.post.calories}
              />
            </div>

            <div className="shareOption">
              <img
                className="shareIcon"
                src="/image/icon_recipes.png"
                alt="icon"
              />
              <input
                className="shareInput"
                name="recipes"
                type="text"
                id="recipes"
                placeholder="Add Recipes"
                onChange={handleChange}
                defaultValue={editForm.post.recipes}
              />
            </div>
          </div>
        </div>

        <input className="shareButton" type="submit" value="POST" />
      </form>
    </div>
  )
}

export default EditForm
