import React from 'react'
import { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import axios from 'axios';

const Search = ({posts,setPosts}) => {
    const [query, setQuery] = useState("");
    // const [results, setResults] =useState({})


    // const tagsArr = posts.tags.map(item => item.toLowerCase())
    // console.log(tagsArr)
    const keys =["title","user.username"]
    const search = (posts) =>{
        return posts.filter((item) =>
            item.title.toLowerCase().includes(query) ||
            item.user.username.toLowerCase().includes(query) ||
            item.user.email.toLowerCase().includes(query)
            // item.tags.map(tag => tag.toLowerCase()).includes(query)||
            // item.recipes.map(recipe => recipe.toLowerCase()).includes(query)
            // keys.some((key) => item[key].toLowerCase().includes(query))
        )
    }
    // let getResults = (posts) =>{
    //     setResults(posts)
    // }

    // useEffect(()=>{
    //     getResults()
    // },[])

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const res = await axios.get(`${process.env.REACT_APP_backendURI}search?q=${query}`);
    //     setPosts(res);
    //     console.log(res)
    //   };
    //   if (query.length === 0 || query.length > 2) fetchData();
    // }, [query]);
  
  return (
<div className="app">
    <h1>Search Meal</h1>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      <SearchResults posts={search(posts)} />
    </div>
  );
}

export default Search