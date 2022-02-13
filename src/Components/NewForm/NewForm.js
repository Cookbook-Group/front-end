import React, { useState } from 'react'
import './NewForm.css'
// import Popup from './Popup';
import Popup from '../PopUp/Popup'

const NewForm = ({addPost,user}) => {
  const form = {
    image: '',
    title: '',
    calories: '',
    recipes: '',
    tags: ''
  }
  const [newForm , setNewForm] = useState(form)
  const [isOpen , setIsOpen] = useState(false)
  // const [user , setUser] =useState(user)

  const togglePopup = () =>{
    setIsOpen(!isOpen)
  }

  ////////////////////// Handle Submit

  let handleSubmit = async (e)=>{
    e.preventDefault()
    let response = await fetch(`${process.env.REACT_APP_backendURI}posts`,{
      method: 'POST',
      body: JSON.stringify({
          // userId: newForm.user,
          image: newForm.image,
          title: newForm.title,
          calories: newForm.calories,
          recipes: newForm.recipes,
          tags: newForm.tags,
          userId: user._id
      }),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
    let post = await response.json()
    console.log(response)
    addPost(post)
    setNewForm('')
  }

  let handleChange = (e) =>{
    setNewForm({
			...newForm,[e.target.id]: e.target.value
		})
}

  return (
<form onSubmit={handleSubmit}>
  <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="" alt="" />
          <input 
            value="What's your MEAL ?"
            className="shareInput"
            type="button"
            onClick={togglePopup}
          />
      </div>

        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">

                <div className="shareOption">
                    <img 
                      className="shareIcon" 
                      src='/image/icon_image.png' 
                      alt='icon' 
                      name='image'
                      id='image'
                      onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Image</span>
                </div>

                <div className="shareOption">
                  <img 
                    className="shareIcon" 
                    src='/image/icon_tag.png' 
                    alt='icon' 
                    name='tags'
                    id='tags'
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Tag</span>
                </div>

                <div className="shareOption">
                  <img  
                    className="shareIcon" 
                    src='/image/icon_kcal.png' 
                    alt='icon'
                    name='calories'
                    id='calories'
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Calories</span>
                </div>

                <div className="shareOption">
                  <img 
                    className="shareIcon" 
                    src='/image/icon_recipes.png' 
                    alt='icon'
                    name='recipes'
                    id='recipes'
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Recipes</span>
                </div>

            </div>
            <button onClick={togglePopup} className="shareButton">POST</button>
        </div>
      </div>
    </div>

{/* /////////////////////////////////// Pop Up info//////////////////////////////////// */}
    {isOpen && <Popup 
            content={<>
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
                    value={newForm.title}/>
                </div>

                <hr className="shareHr"/>

                <div className="shareBottom">
                  <div className="shareInput">

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Image" name='image' id='image' type='text' onChange ={handleChange} 
                          value={newForm.image}/>
                      </div>
               
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_tag.png' alt='icon'/>
                          <input className="shareInput" name='tags' id='tags' type='text' placeholder ="Add tag #" 
                          onChange ={handleChange} 
                          value={newForm.tags}/>
                      </div>

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_kcal.png' alt='icon'/>
                          <input className="shareInput" name='calories' type='text' id='calories' placeholder ="Add Calories" 
                          onChange ={handleChange} 
                          value={newForm.calories}/>

                      </div>
                    
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_recipes.png' alt='icon'/>
                          <input className="shareInput" name='recipes' type='text' id='recipes' placeholder ="Add Recipes" 
                          onChange ={handleChange} 
                          value={newForm.recipes}/>
                      </div>
                     
                  </div>
                  <input className="shareButton" type="submit" value='POST' />
                  {/* <button type='submit' className="shareButton">POST</button> */}
              </div>
            </>}
          handleClose={togglePopup}
           />} 

  </form>
  )
}

export default NewForm