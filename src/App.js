import "./App.css"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import New from "./Components/New/New"
import axios from "axios"
import SaveDishes from "./Components/SaveDishes/SaveDishes"
import Feed from "./Components/Feed/Feed"
import Chat from "./Components/Chat/Chat"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import { useEffect, useState } from "react"
import User from "./Components/User"
import Uploads from './Components/Uploads/Uploads';
import UploadHome from './Components/Uploads/UploadHome'

import Search from "./Components/Search/Search"

import Edit from "./Components/Edit/Edit"
import Profile from "./Components/Profile/Profile"


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState()
  const [message, setMessage] = useState("")
 
  const [users, setUsers] = useState()
  const [foundUser, setFoundUser] = useState()

  function getData() {
    axios.get(`${process.env.REACT_APP_backendURI}posts`).then((res) => {
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      )
    })
    axios.get(`${process.env.REACT_APP_backendURI}users`).then((res) => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  const login = (user) => {
    if (user && user.username !== undefined) {
      setUser(user)
      console.log(user)
      setMessage(`Log in Success`)
    } else {
      setMessage(`Wrong username or password`)
    }
  }

  //  const logout = () => {
  //   setUser({username:'', password:''})
  //   console.log(setUser)
  // }

  let addPost = (post)=>{
    setPosts([post,...posts])
  }

  //the others way to addpost
  // let addPost = (post)=>{
  //   const newPost =[...posts,post]
  //   newPost.sort((p1, p2) => {
  //     return new Date(p2.createdAt) - new Date(p1.createdAt);
  //   })
  //   setPosts(newPost)
  // }



  return (
    <div className="App">
      {/* <button onClick={logout}>logout</button>  */}
      <Nav user={user} />
      <Routes>
          <Route path="/" element={user ? <Home posts={posts} user={user} addPost={addPost} setPosts={setPosts}/>: <Navigate to='/login' />}  />

          <Route path="/new" element={user ? <New addPost={addPost} user={user}/> : <Navigate to='/login' />} />
          <Route path="/save" element={ user? <SaveDishes />: <Navigate to='/login' />}  />
          <Route path="/feed/:id" element={user ? <Feed post={posts} user={user} setPosts={setPosts} setUser={setUser}/>: <Navigate to='/login' />}  />
          <Route path="/chat" element={user ? <Chat />: <Navigate to='/login' />}  />
          <Route
          path="/login"
          element={user ? <Navigate to={`/feed/${user._id}`}/> : <Login setUser={setUser} login={login} message={message}/>}

        />


        <Route path='/search' element={<Search posts={posts} setPosts={setPosts}/>}/>

          <Route path='/uploads' element={<Uploads />}/>
          <Route path='/uploadHome' element={<UploadHome />}/>
          <Route path="/feed/:userId/posts/:id/edit" element={<Edit setPosts={setPosts} user={user} />} />
          <Route path="/posts/:id/edit" element={<Edit setPosts={setPosts} user={user} />} />

          <Route path='/profile/:id' element={<Profile user={user} setUser={setUser}/>}/>


          <Route
        

          path="/user/:userId"
          element={
            <User
              setFoundUser={setFoundUser}
              foundUser={foundUser}
              users={users}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
