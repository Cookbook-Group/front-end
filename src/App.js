// import logo from './logo.svg';
import "./App.css"
import Header from "./Components/Header"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import New from "./Components/New/New"

import axios from "axios"

// import { Route,Routes,Link } from 'react-router-dom';

import Posts from "./Components/Posts"
import SaveDishes from "./Components/SaveDishes/SaveDishes"
import Feed from "./Components/Feed/Feed"
import Chat from "./Components/Chat/Chat"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Recipe from "./Components/Recipe/Recipe"
import { useEffect, useState } from "react"
import User from "./Components/User"
import NewForm from "./Components/NewForm/NewForm"
import { getDefaultNormalizer } from "@testing-library/dom"
import Uploads from './Components/Uploads/Uploads';
import UploadHome from './Components/Uploads/UploadHome'


import Edit from "./Components/Edit/Edit"


function App({ postData, userData }) {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState()
  const [message, setMessage] = useState("")
  // const [isLogin, setIsLogin] = useState(false)
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
      console.log("login")
      setUser(user)
      // setIsLogin(!isLogin)
      // console.log(!isLogin)
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
          <Route path="/feed/:id" element={user ? <Feed post={posts} user={user}/>: <Navigate to='/login' />}  />
          <Route path="/chat" element={user ? <Chat />: <Navigate to='/login' />}  />
        <Route
          path="/login"
          element={user ? <Navigate to={`/feed/${user._id}`}/> : <Login setUser={setUser} login={login} message={message}/>}
        />
         <Route path='/uploads' element={<Uploads />}/>
          <Route path='/uploadHome' element={<UploadHome />}/>

        <Route path="/posts/:id/edit" element={<Edit />} />
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
      {/* <Header />
      <User user={tempUser}/>
      <Posts postData={posts}/>
      <Recipe/> */}

    </div>
  )
}

export default App
