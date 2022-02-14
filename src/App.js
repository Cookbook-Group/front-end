// import logo from './logo.svg';
import "./App.css"
import Header from "./Components/Header"
import { Route, Routes, Link } from "react-router-dom"
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
import ProtectedRoutes from "./Components/ProtectedRoutes"
import { getDefaultNormalizer } from "@testing-library/dom"

function App({ postData, userData }) {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState()
  const [message, setMessage] = useState("")
  // const [isLogin, setIsLogin] = useState(false)
  const [users, setUsers] = useState()
  const [foundUser, setFoundUser] = useState()

  function getData() {
    axios.get(`${process.env.REACT_APP_backendURI}posts`).then((res) => {
      setPosts(res.data)
    })
    axios.get(`${process.env.REACT_APP_backendURI}users`).then((res) => {
      setUsers(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

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
    setPosts([...posts,post])
  }

  
  // below code is for testing
  let tempUser = userData[0]

  return (
    <div className="App">
      {/* <button onClick={logout}>logout</button>  */}
      <Nav user={user} />
      <Link to="/user/62095837891225a64c8e75a4">Nick's User Testing Link</Link>
      <Routes>
        <Route path="/" element={<Home posts={posts} user={user} />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/new" element={<New addPost={addPost} user={user}/>} />
          <Route path="/save" element={<SaveDishes />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route
          path="/login"
          element={<Login setUser={setUser} login={login} message={message} />}
        />
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
