// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Route, Routes, Link} from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import New from './Components/New/New';

// import { Route,Routes,Link } from 'react-router-dom';
import Posts from './Components/Posts';
import SaveDishes from './Components/SaveDishes/SaveDishes';
import Feed from './Components/Feed/Feed';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Recipe from './Components/Recipe/Recipe';
import { useState } from 'react';
import User from './Components/User'

function App({postData, userData}) {

  const [user, setUser] = useState()
  // below code is for testing
  let tempUser = userData[0]
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/save' element={<SaveDishes/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
        </Routes>
      <Header />
      <User user={tempUser}/>
      <Posts postData={postData}/>
      <Recipe/>
    </div>
  );
}

export default App;
