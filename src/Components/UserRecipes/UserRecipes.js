import React, {useState} from 'react'
import './UserRecipes.css'
import Popup from '../PopUp/Popup'

const UserRecipes = ({posts,user}) => {
    const [isOpen , setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen)
      }

  return (
    <div>
         <section className='container'>
            {
                posts.map(post =>(
            
                <div className='card'>
                <div className='card-image'>
                    <img className='image-size'
                        type="button"
                        onClick={togglePopup}
                        src={post.image} 
                        alt=""    
                    />
                {isOpen && <Popup
                    content={<div>
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
                                            
            ))
            }
    
        </section>
    </div>
  )
}

export default UserRecipes