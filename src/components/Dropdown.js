import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.select`
    margin; 0 auto;
    border: none; 
    height: 40px;
    box-shadow: 0px 2px 9px 0px rgba(0,0,0,0.0532);
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 200px;
    @media all and (min-width: 1050px){
        margin: 0px;
        margin-right: 60px;
    }
    
`

const Dropdown = ({ handleRegion, value }) => {
    const handleSelect = (e) => {
        if(e.target.value === "Filter by Region"){
            handleRegion("");
        }else{
            handleRegion(e.target.value);
        }
    }
    return (
        <div>
            <InputStyle value={value} onChange={handleSelect} name="Filter by Region">
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