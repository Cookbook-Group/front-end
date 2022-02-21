import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SideBar.css'


const SideBar = ({currentUser,userProfile}) => {
    const [friends, setFriends] = useState([])

    const getFriends = async () => {
        try {
            const friendsList = await axios.get(`${process.env.REACT_APP_backendURI}users/friends/${userProfile._id}`)
            setFriends(friendsList.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getFriends()
    },[userProfile])


  return (

    <div className="sidebar">
      <div className="sidebarWrapper">
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        <h2>following</h2>
        <div className="rightbarFollowings">
            {friends.map((friend) => (
             <Link
             to={`/feed/${friend._id}`}
             style={{ textDecoration: "none", color:'black'}}
              >
             <div className="rightbarFollowing">
                <img
                src={
                friend.profilePicture
                  ?  friend.profilePicture
                  :  "/image/icon_avatar.png"
                }
                 alt=""
                  className="rightbarFollowingImg"
                 />
             <span className="rightbarFollowingName">{friend.username}</span>
             </div>
             </Link>
             ))}
             </div>
        </ul>
      </div>
    </div>
  );
}


export default SideBar