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

function App({postData}) {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/save' element={<SaveDishes/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <Header />
      <Posts postData={postData}/>
      <Recipe/>
    </div>
  );
}

export default App;
