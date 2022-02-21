import React, {useState} from 'react'
import './UserRecipes.css'
import Popup from '../PopUp/Popup'
import RecipesDetails from '../RecipesDetails/RecipesDetails'
import { Link } from 'react-router-dom'

const UserRecipes = ({currentUser,user,post,setPosts}) => {
    const [isOpen , setIsOpen] = useState(false)
    const togglePopup = () =>{
        setIsOpen(!isOpen)
      }

      let deletePost = async (post) => {
        if (post.userId === user._id) {
          let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
          method:'DELETE',
          body:null,
          headers: {
            'content-type': 'application/json'
        }
        })
        let allPosts = await data.json()
        alert('Your post had been deleted.')
        if (allPosts) {
        setPosts(
          allPosts.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        )}
        } else {
          alert('You can only delete your own post.')
        }
      }

      let addLikes = async (post) => {
        let data = await fetch(`${process.env.REACT_APP_backendURI}posts/${post._id}`,{
          method:'PUT',
          body: JSON.stringify({likes: post.likes + 1}),
          headers: {
            'content-type': 'application/json'
        }
      })
      let allPosts = await data.json()
      if(allPosts){
        setPosts(
          allPosts.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
          )
      }
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
                    <div>
                    <img className='details-image'
                    src={post.image} 
                    alt="food"/>
                    <h1>{post.recipes}</h1> 
                    <p className='title'>'{post.title}'</p>
                    <h4>{post.calories ? `Calories: ${post.calories}` : ''}</h4>
                    <p><strong>Ingredients: </strong>{post.ingredients}</p>
                    <p><strong>Instructions: </strong> {post.instructions}</p>
                    
                    <div className="postBottom">
                    <div className="postBottomLeft">
            <img
              className="likeIcon"
              src='/image/icon_like.png'
              onClick={() => addLikes(post)}
              alt=""
            />
            <span className="postLikeCounter">{post.likes} people like it</span>
          </div>  
                    { (post.userId === currentUser._id) ? 
          <div className="postTopRight">
          <img className='icon_post' src='/image/icon_delete.png' alt='Delete' onClick={() => deletePost(post)} />    
            <Link to={{pathname: `/posts/${post._id}/edit`}}>
              <img className='icon_post' src='/image/icon_edit.png' alt='Edit'/>
            </Link>
          </div> :  null}       
                </div>
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