import React from 'react'

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
            <select value={value} onChange={handleSelect} name="Filter by Region">
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}
export default Dropdown;