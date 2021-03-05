import React from 'react'
import { Link } from 'react-router-dom';

const CardPage = (props) => {

    const { name, population, region, capital, nativeName, subregion, 
        languages, currencies, topLevelDomain, borders, flag } = props.location.state;
    return (
        <div>
            <Link to="/">Back</Link>
            <div>   
                <img src={flag}></img>
                <div>
                    <h1>{name}</h1>
                    <div>
                        <p><span>Native Name: </span>{nativeName}</p>
                        <p><span>Population: </span>{population}</p>
                        <p><span>Region: </span>{region}</p>
                        <p><span>Sub Region: </span>{subregion}</p>
                        <p><span>Capital: </span>{capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                        <p><span>Currencies: </span>{currencies[0].name}</p>
                        <p><span>Languages: </span></p>
                        {languages.map((lang, i) => {
                            if(i == languages.length - 1){
                                return <p>{lang.name}</p>
                            }else{ 
                                return <p>{lang.name}, </p>
                            }
                        })}
                        
                    </div>
                        {borders.map((bord, i) => {
                            if(i == borders.length - 1){
                                return <p>{bord}</p>
                            }else{ 
                                return <p>{bord}, </p>
                            }
                        })}
                </div>
            </div>
        </div>
    )
}
export default CardPage;