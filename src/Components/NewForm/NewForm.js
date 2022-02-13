import React, { useState } from 'react'
import './NewForm.css'
// import Popup from './Popup';
import Popup from '../PopUp/Popup'

const NewForm = ({addPost}) => {
  const form = {
    image: '',
    title: '',
    calories: '',
    recipies: '',
    tags: ''
  }
  const [newForm , setNewForm] = useState(form)
  const [isOpen , setIsOpen] = useState(false)

  const togglePopup = () =>{
    setIsOpen(!isOpen)
  }

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

  let handleChange = (e) =>{
    setNewForm(e.target.value)
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
                      onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Image</span>
                </div>

                <div className="shareOption">
                  <img 
                    className="shareIcon" 
                    src='/image/icon_tag.png' 
                    alt='icon' 
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Tag</span>
                </div>

                <div className="shareOption">
                  <img  
                    className="shareIcon" 
                    src='/image/icon_kcal.png' 
                    alt='icon'
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Calories</span>
                </div>

                <div className="shareOption">
                  <img 
                    className="shareIcon" 
                    src='/image/icon_recipies.png' 
                    alt='icon'
                    onClick={togglePopup}/>
                    <span className="shareOptionText" onClick={togglePopup}>Recipies</span>
                </div>

            </div>
            <button onClick={togglePopup} className="shareButton">POST</button>
        </div>
      </div>
    </div>

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
                    value={newForm.title}/>
                </div>

                <hr className="shareHr"/>

                <div className="shareBottom">
                  <div className="shareInput">

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_image.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Image"  onChange ={handleChange} 
                          value={newForm.image}/>
                      </div>
               
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_tag.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add tag #" 
                          onChange ={handleChange} 
                          value={newForm.tags}/>
                      </div>

                      <div className="shareOption">
                          <img  className="shareIcon" src='/image/icon_kcal.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Calories" 
                          onChange ={handleChange} 
                          value={newForm.calories}/>

                      </div>
                    
                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_recipies.png' alt='icon'/>
                          <input className="shareInput" placeholder ="Add Recipies" 
                          onChange ={handleChange} 
                          value={newForm.recipies}/>
                      </div>
                     
                  </div>
                  {/* <input className="shareButton" type="submit" value='POST' /> */}
                  <button type='submit' className="shareButton">POST</button>
        </div>
                {/* <button className="shareButton" >POST</button> */}
            </>}
          handleClose={togglePopup}
           />} 

  </form>
  )
}

export default NewForm