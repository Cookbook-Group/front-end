import React from 'react'
import { useState, useEffect } from 'react';
import'./ResultsTable.css'
import { Link } from 'react-router-dom';

const ResultsTable = ({post}) => {

  return (
    
    <div className='card_search'>
      
            <div className='card-image_search'>
              <Link to={``}>
              
              </Link>
                <img className='image-size' 
                src={post.image} 
                alt='img'/>
            </div>

            <div className='card-title_search'>
              <Link to={`/feed/${post.userId}`} style={{textDecoration:'none',color:'white'}}>
                  <img className="shareProfileImg_search" src={post.user.profilePicture}
              alt='img'/>
                  <h3 className='search_h3'>{post.user.username}</h3>
              </Link>


              <p className='search_p'>{post.title}</p>

            </div>          
    </div>
  )
}

export default ResultsTable