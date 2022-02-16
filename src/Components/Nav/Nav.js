import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import User from '../User';
import './Nav.css'


const Nav = ({user}) => {
  return (
    
      <nav>
        
           <Link to='/'>
              <img className='logonav' src='/image/logo.png' alt='logo'/>
           </Link>

           {/* <SearchForm/> */}

           <h1 style={{color:'black'}}>{user && user.username !== undefined ? `welcome ${user.username}` : null }</h1>

            

            <ul>
              <li>
                <Link to='/'>
                  <img className='icon' src='/image/icon_home.png' alt='home'/>
                </Link>
              </li>
              
              <li>
                <Link to='/new'>
                  <img className='icon' src='/image/icon_add.png' alt='add'/>
                </Link>
              </li>

              <li>
                <Link to='/feed/:id'>
                  <img className='icon' src='/image/icon_heart.png' alt='heart'/>
                </Link>
              </li>

              <li>
                <Link to='/save'>
                  <img className='icon' src='/image/icon_savedish.png' alt='save'/>
                </Link>
              </li>

              <li>
                <Link to='/chat'>
                  <img className='icon' src='/image/icon_chat.png' alt='chat'/>
                </Link>
              </li>
              <li>  
                <Link to='/login'>
                  <img className='icon' src='/image/icon_login.png' alt='login'/> 
                </Link>

                {/* <Link to='/profile'>
                  <img src='' alt='profile avatar'/> <p>by user.name</p>
                </Link> */}
                
              </li>
            </ul>    
      </nav>
    
  );
};

export default Nav;
