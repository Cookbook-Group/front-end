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
                posts.map((post) =>(
            
                <div className='card'>
                <div className='card-image'>
                    <img className='image-size'
                        src={post.image} 
                        alt={user.name}
                        type="button"
                        onClick={togglePopup}
                    />
                    {/* </div>
                    </div> */}

                {isOpen && <Popup
                    content={<>
                    <img 
                        src={post.image} 
                        alt={user.name}/>
                    </>}
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