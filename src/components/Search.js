import React from 'react'

const Search = ({ handleSearch, value }) => {
    const handleText = (e) => {
        handleSearch(e.target.value);
    }
    return (
        <div>
            <input value={value} onChange={handleText} type="text" placeholder="Search for a country..."></input>
        </div>
    )
}
export default Search;