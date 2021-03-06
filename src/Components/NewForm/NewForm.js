import React, { useState } from 'react'
import './NewForm.css'
import Popup from '../PopUp/Popup'
import { Navigate, useNavigate } from 'react-router-dom'
import Uploads from '../Uploads/Uploads'

const NewForm = ({addPost,user, uploadedImageUrl, setUploadedImageUrl}) => {
  const form = {
    image: '',
    title: '',
    calories: '',
    recipes: '',
    tags: ''
  }
  const [newForm , setNewForm] = useState(form)
  const [isOpen , setIsOpen] = useState(false)
  const navigate = useNavigate()
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
          //image: newForm.image,
          image: uploadedImageUrl,
          title: newForm.title,
          calories: newForm.calories,
          recipes: newForm.recipes,
          ingredients: newForm.ingredients,
          instructions: newForm.instructions,
          tags: newForm.tags,
          userId: user._id,
          user: user
      }),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
    let post = await response.json()
    addPost(post)
    setNewForm('')
    togglePopup()
    navigate('/')
  }

  let handleChange = (e) =>{
    setNewForm({
			...newForm,[e.target.id]: e.target.value
		})
}

  return (
    <>
 
  <div className="share">
      <div className="shareWrapper">
      <div className="shareTop">
          <img className="shareProfileImg1" src={user.profilePicture
                    ?  user.profilePicture:
                    "/image/icon_avatar.png"} alt="" />
         <div className="shareInput">
           <Uploads uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}/>
         </div>
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
            <form onSubmit={handleSubmit}>
                <b>Add Your Post</b>
                <hr className="shareHr"/>
                <div className="shareTop">
                  <img className="shareProfileImg" src={user.profilePicture
                    ?  user.profilePicture:
                    "/image/icon_avatar.png"} alt="" />
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
                
                          <p className="shareInput" placeholder ="Add Image" name='image' id='image' type='text' onChange ={handleChange} 
                          value={uploadedImageUrl}/>
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
                          <input className="shareInput" name='recipes' type='text' id='recipes' placeholder ="Add Recipe Name" 
                          onChange ={handleChange} 
                          value={newForm.recipes}/>
                      </div>

                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_list.png' alt='icon'/>
                          <input className="shareInput" name='ingredients' type='text' id='ingredients' placeholder ="Add Ingredients" 
                          onChange ={handleChange} 
                          value={newForm.ingredients}/>
                      </div>

                      <div className="shareOption">
                          <img className="shareIcon" src='/image/icon_howTo.png' alt='icon'/>
                          <input className="shareInput" name='nstructions' type='text' id='instructions' placeholder ="Add Instructions" 
                          onChange ={handleChange} 
                          value={newForm.instructions}/>
                      </div>
                      
                    </div>
                     
                  
                  <input className="shareButton" type="submit" value='POST'  />
                  {/* <button type='submit' className="shareButton">POST</button> */}
              </div>
              </form>
            </> }
          handleClose={togglePopup}
           />} 
 
  </>
  )
}

export default NewForm