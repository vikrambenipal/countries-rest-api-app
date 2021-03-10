import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';

// const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     .search {
//         position: relative;
//     }
// `
const SearchStyle = styled.input`
    display: flex;  
    margin: 0 auto;
    margin-top: 15px;
    border: none; 
    box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.0532);
    height: 40px;
    width: 60vw;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    @media all and (min-width: 1050px){
        margin: 0px;
        margin-left: 60px;
        width: 30vw;
    }
    &.light {
        background-color: white;
        &::-webkit-input-placeholder {
            color: #C4C4C4;
        }
        color: black;
    }
    &.dark {
        background-color: #2B3844;
        &::-webkit-input-placeholder {
            color: white;
        }
        color: white;
    }
    
`

const Search = ({ handleSearch, value }) => {
    const lightTheme = useContext(ThemeContext);
    const handleText = (e) => {
        handleSearch(e.target.value);
    }
    return (
        <div>
            <SearchStyle className={lightTheme ? "light" : "dark"} 
            value={value} onChange={handleText} 
            type="text" 
            placeholder="Search for a country..."></SearchStyle>
        </div>
    )
}
export default Search;