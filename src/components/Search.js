import React from 'react'

const Search = ({ handleSearch }) => {
    const handleText = (e) => {
        handleSearch(e.target.value);
    }
    return (
        <div>
            <input onChange={handleText} type="text" placeholder="Search for a country..."></input>
        </div>
    )
}
export default Search;