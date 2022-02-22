import React from 'react'
import { useState, useEffect } from 'react';
import ResultsDetails from '../ResultsDetails/ResultsDetails';
import ResultsTable from '../ResultsTable/ResultsTable'
import './SearchResults.css'

const SearchResults = ({posts}) => {
    //   const [query, setQuery] = useState("");
    //   const keys =["user.username","title","recipes"]
    //   const search = (posts) =>{
    //     return posts.filter((item) => item.title.toLowerCase().includes(query)         
    //   )
    // }
  return (
    <div className='container_search'>
        {posts.map((post) => {
          return (
           
          <ResultsTable post={post} key={post._id}/>
      
          )}
        )}

    </div>
  )
}

export default SearchResults