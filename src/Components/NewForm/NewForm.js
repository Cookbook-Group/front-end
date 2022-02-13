import React, { useState } from 'react'
import './NewForm.css'

const NewForm = ({addPost}) => {
  const form = {
    image: '',
    title: '',
    calories: '',
    recipies: '',
    tags: ''
  }
  const [newForm , setNewForm] = useState(form)

  ////////////////////// Handle Submit

  let handleSubmit = async (e)=>{
    e.preventDefault()
    let response = await fetch(`${process.env.REACT_APP_backendURI}/:id/posts`,{
      method: 'POST',
      body: JSON.stringify({
          image: newForm.image,
          title: newForm.title,
          calories: newForm.calories,
          recipies: newForm.recipies,
          tags: newForm.tags
      }),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
    let post = await response.json()
    addPost(post)
    setNewForm('')
  }

  return (
<div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="" alt="" />

          <input 
            placeholder="What's your MEAL ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <img className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                    <span className="shareOptionText">Image</span>
                </div>
                <div className="shareOption">
                <img className="shareIcon" src='/image/icon_tag.png' alt='icon'/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                <img  className="shareIcon" src='/image/icon_kcal.png' alt='icon'/>
                    <span className="shareOptionText">Calories</span>
                </div>
                <div className="shareOption">
                <img className="shareIcon" src='/image/icon_recipies.png' alt='icon'/>
                    <span className="shareOptionText">Recipies</span>
                </div>

            </div>
            <button className="shareButton">POST</button>
        </div>
      </div>
    </div>

  )
}

export default NewForm