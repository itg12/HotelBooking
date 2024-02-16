import React, { useState } from 'react'

export default function Searchbar(props) {
    const [Search, setSearch]= useState('')
    const handleInput=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div className="searchbar">
        <input className="search-box" type="search" placeholder="Search.." value={Search} onChange={handleInput}/>
    </div>
  )
}
