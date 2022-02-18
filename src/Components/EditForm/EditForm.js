import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import '../NewForm/NewForm.css'

let EditForm = ({ post, setPosts ,user}) => {


  let [editForm, setEditForm] = useState({post})

  const navigate = useNavigate()

  let handleSubmit = async (e) => {
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_backendURI}posts/${post._id}`,editForm)
    .then((res) => {
      setPosts(
        res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))
      alert('Your post successfully updated')
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
  }

 
  let handleChange = (e) =>{
    setEditForm({
			...editForm,[e.target.id]: e.target.value
		})
}

  return (
    <div>
      <form onSubmit={handleSubmit} afterSubmit={() => navigate('/')}>
        <b>Edit Your Post</b>
        <hr className="shareHr" />
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? user.profilePicture : "/image/icon_avatar.png"} alt="" />
          <input
            placeholder="What's your MEAL ?"
            className="shareInput"
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            defaultValue={post.title}
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareInput">
            <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Image" name='image' id='image' type='text' onChange ={handleChange} 
                          defaultValue={post.image}/>
                      </div>

            <div className="shareOption">
              <img className="shareIcon" src="/image/icon_tag.png" alt="icon" />
              <input
                className="shareInput"
                name="tags"
                id="tags"
                type="text"
                placeholder="Add tag #"
                onChange={handleChange}
                defaultValue={post.tags}
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
                defaultValue={post.calories}
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
                defaultValue={post.recipes}
              />
            </div>
            <div className="shareOption">
              <img
                className="shareIcon"
                src="/image/icon_list.png"
                alt="icon"
              />
              <input
                className="shareInput"
                name="ingredients"
                type="text"
                id="ingredients"
                placeholder="Add Ingredients"
                onChange={handleChange}
                defaultValue={post.ingredients}
              />
            </div>
            <div className="shareOption">
              <img
                className="shareIcon"
                src="/image/icon_howTo.png"
                alt="icon"
              />
              <input
                className="shareInput"
                name="instructions"
                type="text"
                id="instructions"
                placeholder="Add Instructions"
                onChange={handleChange}
                defaultValue={post.instructions}
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
