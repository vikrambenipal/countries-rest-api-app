import React from 'react'
import CardPage from './CardPage';
import Nav from './Nav';
import { Switch, Route, Link } from 'react-router-dom';
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
            <Link to={`/country/${name}`}>
                <CardContainer>
                    <img src={flag} alt=""></img>
                    <h3>{name}</h3>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </CardContainer>
            </Link>
        </div>
        
    )
}
export default Card;