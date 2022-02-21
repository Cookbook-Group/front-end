import React from 'react'
import { useState, useEffect } from 'react';
import ResultsTable from '../ResultsTable/ResultsTable'

const SearchResults = ({posts}) => {
    //   const [query, setQuery] = useState("");
    //   const keys =["user.username","title","recipes"]
    //   const search = (posts) =>{
    //     return posts.filter((item) => item.title.toLowerCase().includes(query)         
    //   )
    // }
  return (
    <div>
        {posts.map((post) => {
          return<ResultsTable post={post} key={post.title}/>
        }
        )
        }

    </div>

  )
}

export default SearchResults