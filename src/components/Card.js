import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeContext from '../ThemeContext';

const CardContainer = styled.div`
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.0494);
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 45px;
    width: 70%;
    max-width: 350px;
    height: 350px;
    padding-bottom: 30px;
    flex-wrap: wrap;
    h3, p {
        padding-left: 20px;
    }
    p {
        margin-top: -5px;
    }
    .info {
        margin-top: 30px;
    }
    img {
        width: 100%;
        height: 180px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    cursor: pointer;
    .link {
        color: inherit;
        text-decoration: none;
    }
    &.light {
        p, h3 {
            color: black;
        }
        background-color: white;
    }
    &.dark {
        p, h3 {
            color: white;
        }
        background-color: #2B3844;
    }
`

const Card = ({ name, population, region, capital, nativeName, subregion, 
    languages, currencies, topLevelDomain, borders, flag }) => {
    
    const lightTheme = useContext(ThemeContext);
    console.log(borders);
    return (
        <div>
        <CardContainer className={lightTheme ? "light" : "dark"}>
            <Link className="link" to={{
            pathname: `/country/${name}`,
            state: {
                name: name,
                population: population,
                region: region,
                capital: capital, 
                nativeName: nativeName,
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
            <div className="info">
                <p><span>Population</span>: {population}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>
            </div>
            
            </Link>
        </CardContainer>
            
        </div>
        
    )
}
export default Card;