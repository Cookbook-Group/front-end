import React, {useState} from 'react'
import './UserRecipes.css'
import Popup from '../PopUp/Popup'
import RecipesDetails from '../RecipesDetails/RecipesDetails'

const UserRecipes = ({posts,user,post}) => {
    const [isOpen , setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen)
      }

  return (
    <div>
         <section>
                <div className='card'>
                <div className='card-image'>
                    <img className='image-size'
                        type="button"
                        onClick={togglePopup}
                        src={post.image} 
                        alt=""    
                    />
                {isOpen && <Popup
                    content={
                    // <RecipesDetails post={post}/>
                    <div>
                    <img className='details-image'
                    src={post.image} 
                    alt="food"/>
                    <h1>{post.recipes}</h1> 
                    <p className='title'>'{post.title}'</p>
                    <p><strong>Ingredients: </strong>{post.ingredients}</p>
                    <p><strong>Instructions: </strong> {post.instructions}</p>
                             
                </div>
                    }
                    handleClose={togglePopup}
                    />}
                </div>
                </div>
    
        </section>
    </div>
  )
}

export default UserRecipes