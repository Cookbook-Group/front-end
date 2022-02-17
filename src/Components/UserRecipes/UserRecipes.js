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
                    <p>{post.title}</p>
                    <p>{post.recipes}</p> 
                             
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