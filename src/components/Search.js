import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.input`
    display: flex;  
    margin: 0 auto;
    margin-top: 15px;
    border: none; 
    box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.0532);
    height: 40px;
    width: 80vw;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    @media all and (min-width: 1050px){
        margin: 0px;
        margin-left: 60px;
        width: 30vw;
    }
`

const Search = ({ handleSearch, value }) => {
    const handleText = (e) => {
        handleSearch(e.target.value);
    }
    return (
        <div>
            <SearchStyle value={value} onChange={handleText} type="text" placeholder="Search for a country..."></SearchStyle>
        </div>
    )
}
export default Search;