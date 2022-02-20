import React from 'react'
import '../SideBar/SideBar.css'


const Follow = ({handleClickFollow, handleClickUnfollow,user,userProfile,follow}) => {

  return (
    <div className='follow'>
        {/* {user.followings.includes(userProfile._id) ? <button onClick={handleClickUnfollow}>unfollow</button> : <button onClick={handleClickFollow}>follow</button>} */}
        <button  onClick={handleClickFollow} className="shareButton1" >follow</button>
        <button onClick={handleClickUnfollow} className='shareButton1' >unfollow</button>
    </div>
    
  )
}

export default Follow