import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';

const InputStyle = styled.select`
    margin; 0 auto;
    border: none; 
    height: 40px;
    box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.0532);
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 200px;
    &.light {
        background-color: white;
        color: black;
    }
    &.dark {
        background-color: #2B3844;
        color: white;
    }
    @media all and (min-width: 1050px){
        margin: 0px;
        margin-right: 60px;
    }
    
`
const Dropdown = ({ handleRegion, value }) => {
    const lightTheme = useContext(ThemeContext);
    const handleSelect = (e) => {
        if(e.target.value === "Filter by Region"){
            handleRegion("");
        }else{
            handleRegion(e.target.value);
        }
    }
    return (
        <div>
            <InputStyle className={lightTheme ? "light" : "dark"} value={value} onChange={handleSelect} name="Filter by Region">
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </InputStyle>
        </div>
    )
}
export default Dropdown;