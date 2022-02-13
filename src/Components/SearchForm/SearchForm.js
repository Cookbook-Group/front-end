import React from 'react'
import './SearchForm.css'

const SearchForm = ({ handleSubmit, handleChange, searchString}) => {
  return (
    <div>
        <form className='search' onSubmit = {handleSubmit}>

          <input 
          className="search_bar" 
          type="text" 
          placeholder="Search"
          name = "searchString"
          required 
          onChange = {handleChange}
          value = {searchString}
          />
          {/* <button  type='submit'>
            <img className='icon' src='/image/icon_search.png' alt='icon'/>
          </button> */}
        </form>
    </div>
  )
}

export default SearchForm