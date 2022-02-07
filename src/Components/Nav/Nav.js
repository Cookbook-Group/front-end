import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


const Nav = () => {
  return (
    
      <nav>
        <Link to='/'>
          <img className='logo' src='/image/logo.png' alt='logo'/>
        </Link>

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
                <Link to='/feed'>
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
              <button>
                  <Link to='/login'>
                    Log In
                  </Link>
              </button>
              </li>
              <li>
              <button>
                  <Link to='/singup'>
                    Sing Up
                  </Link>
              </button>
              </li>
            </ul>
         
       
      </nav>
    
  );
};

export default Nav;