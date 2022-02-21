import React from 'react'
import { useState, useEffect } from 'react';

const ResultsTable = ({post}) => {

  return (
    <div>
            <p>{post.user.username}</p>
            <p>{post.title}</p>
            <p>{post.tags}</p>
            <img src={post.image} alt='img'/>
            <p>{post.recipes}</p>

    </div>
  )
}

export default ResultsTable