import React from 'react'
import "./searchBox.styles.css"

 const SearchBox = ({ placeholder, handleChange }) => {
  console.log()
  
  return(
    <>
   
   <input className="search" type="search" placeholder={ placeholder } 
      onChange={handleChange}
    />
    </>
  )
}
export default SearchBox;