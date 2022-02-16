import React, { useEffect, useState } from "react"
import axios from "axios"

let EditForm = ({ post }) => {

 

 console.log(post)

  let form = {
    image: post.image,
    title: post.title,
    calories: post.calories,
    recipes: post.recipes,
    tags: post.tags,
  }

  const [editForm, setEditForm] = useState({})

  useEffect(() => {
    setEditForm(form)
  },[])

  console.log(form)
  console.log(editForm)

  let handleSubmit = async (e) => {
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_backendURI}posts/${post._id}`, editForm)
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
      [e.target.id]: e.target.defaultValue,
    })
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        

      <b>Add Your Post</b>
                <hr className="shareHr"/>
                <div className="shareTop">
                  <img className="shareProfileImg" src="" alt="" />
                  <input 
                    placeholder ="What's your MEAL ?"
                    className="shareInput"
                    onChange ={handleChange} 
                    type='text'
                    name='title'
                    id='title'
                    defaultValue={form.title}/>
                </div>

                <hr className="shareHr"/>

                <div className="shareBottom">
                  <div className="shareInput">

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Image" name='image' id='image' type='text' onChange ={handleChange} 
                          defaultValue={form.image}/>
                      </div>
               
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_tag.png' alt='icon'/>
                          <input className="shareInput" name='tags' id='tags' type='text' placeholder ="Add tag #" 
                          onChange ={handleChange} 
                          defaultValue={form.tags}/>
                      </div>

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_kcal.png' alt='icon'/>
                          <input className="shareInput" name='calories' type='text' id='calories' placeholder ="Add Calories" 
                          onChange ={handleChange} 
                          defaultValue={form.calories}/>

                      </div>
                    
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_recipes.png' alt='icon'/>
                          <input className="shareInput" name='recipes' type='text' id='recipes' placeholder ="Add Recipes" 
                          onChange ={handleChange} 
                          defaultValue={form.recipes}/>
                      </div>
                     
                  </div>
                  </div>

        
        <input className="shareButton" type="submit" value='POST' />
      </form>
    </div>
  )
}

export default EditForm
