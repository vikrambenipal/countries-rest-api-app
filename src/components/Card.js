import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px solid black;
    margin: 0 auto;
    margin-bottom: 25px;
    width: 70%;
    img {
        width: 100%;
    }
    cursor: pointer;
`

const Card = ({ name, population, region, capital, nativeName, subregion, 
    languages, currencies, topLevelDomain, borders, flag }) => {
    return (
        <div>
        <CardContainer>
            <Link to={{
            pathname: `/country/${name}`,
            state: {
                name: name,
                population: population,
                region: region,
                capital: capital, 
                nativeName, nativeName,
                subregion: subregion,
                languages: languages,
                currencies: currencies,
                topLevelDomain: topLevelDomain,
                borders: borders,
                flag: flag
            }
            }}>
            <img src={flag} alt=""></img>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            </Link>
        </CardContainer>
            
        </div>
        
    )
}
export default Card;