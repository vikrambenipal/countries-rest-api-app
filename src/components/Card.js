import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px solid black;
    margin: 0 auto;
    margin-bottom: 25px;
    width: 70%;
    img {
        width: 100%;
    }
`

const Card = ({ name, population, region, capital, nativeName, subregion, 
    languages, currencies, topLevelDomain, borders, flag }) => {

    return (
        <CardContainer>
            <img src={flag} alt=""></img>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
        </CardContainer>
    )
}
export default Card;