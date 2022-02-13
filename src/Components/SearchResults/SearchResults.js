import React from 'react'

const SearchResults = ({results}) => {
    if (!results.length){
        return <p>No Results Found!</p>
        }
        
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults