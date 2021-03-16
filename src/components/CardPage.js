import React, { useContext } from 'react'
import styled from'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../ThemeContext';

const ButtonContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    width: 130px;
    height: 40px;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.2931);
    text-decoration: none;
    p {
        text-decoration: none;
    }
    .arrow {
        margin-right: 10px;
    }
    &.light {
        p {
            color: black;
        }
    }
    &.dark {
        p {
            color: white;
        }
    }
`
const Flag = styled.img`
    width: 90%;
    border-radius: 5px;
    max-width: 500px;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    @media all and (min-width: 1100px){
        width: 10%;
        margin: 0;
        margin-top: 50px;
        max-width: 500px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
        padding-right: 5px;
    }
`

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (min-width: 800px){
        margin-left: 100px;
    }
`
const Border = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    .bders {
        margin-left: 25px;
        margin-right: 10px;
        box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.1049);
        padding: 5px 40px;
        text-decoration: none;
        color: black;
        margin-top: 20px;
    }
    margin-bottom: 30px;
    &.light{
        p{
            background-color: white;
        }
    }
    &.dark{
        .bders{
            background-color: #2B3844;
        }
    }

`
const Content = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    span, p, .bders {
        font-size: 16px;
    }
    @media all and (min-width: 800px){
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin-top: 0px;
    }
    @media all and (min-width: 1100px){
        margin-right: 20px;
        margin-top: 0px;
    }
`
const Container = styled.div`
    &.light {
        p, h1, .bders {
            color: black;
        }
    }
    &.dark {
        p, h1, .bders {
            color: white;
        }
    }
    @media all and (min-width: 1100px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        //align-items: center;
        margin: 0 auto;
        img {
            width: 40%;
            //height: 400px;
            margin-right: 5%;
            margin-left: 20px;
        }
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    .border {
        margin-left: 30px;
    }
    h1 {
        margin-left: 30px;
        margin-bottom 0px;
    }
    @media all and (min-width: 800px){
        h1 {
            margin-bottom: 20px;
        }
    }
    @media all and (min-width: 1100px){
        //margin-top: 150px;
        h1 {
            margin-top: 20px;
        }
    }
    
`
const CardPage = (props) => {

    const { name, population, region, capital, nativeName, subregion, 
        languages, currencies, topLevelDomain, borders, flag } = props.location.state;

    const lightTheme = useContext(ThemeContext);
    return (
        <div>
            <ButtonContainer className={lightTheme ? "light" : "dark"} to="/">
                <FontAwesomeIcon className="arrow" color={lightTheme ? "black" : "white"} icon={faArrowLeft}></FontAwesomeIcon>
                <p>Back</p>
            </ButtonContainer>
            <Container className={lightTheme ? "light" : "dark"}>   
                <Flag src={flag} alt=""></Flag>
                <Header>
                <h1>{name}</h1>
                    <Content>
                        <Section1>
                            <p><span>Native Name: </span>{nativeName}</p>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Sub Region: </span>{subregion}</p>
                            <p><span>Capital: </span>{capital}</p>
                        </Section1>
                        <Section2>
                            <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                            <p><span>Currencies: </span>{currencies[0].name}</p>
                            <Row>
                                <p><span>Languages: </span></p>
                                {languages.map((lang, i) => {
                                    if(i === languages.length - 1){
                                        return <p key={i}>{lang.name}</p>
                                    }else{ 
                                        return <p key={i}>{ " " + lang.name + ","}   </p>
                                    }
                                })}
                            </Row>
                            
                        </Section2>
                    </Content>
                    
                    {console.log(borders.length)}
                    {borders.length > 0 &&<p><span className="border">Border Countries:</span></p>}
                    <Border className={lightTheme ? "light" : "dark"}>
                        {borders.map((bord, i) => {
                            if(i === borders.length - 1){
                                return <Link className="bders" key={i} to={{
                                    pathname: `/country/${name}`,
                                    state: {
                                        name: borders[i].name,
                                        population: borders[i].population,
                                        region: borders[i].region,
                                        capital: borders[i].capital, 
                                        nativeName: borders[i].nativeName,
                                        subregion: borders[i].subregion,
                                        languages: borders[i].languages,
                                        currencies: borders[i].currencies,
                                        topLevelDomain: borders[i].topLevelDomain,
                                        borders: borders[i].borders,
                                        flag: borders[i].flag
                                    }
                                }}>{bord.name}</Link>
                            }else{ 
                                return <Link className="bders" key={i} to={{
                                    pathname: `/country/${name}`,
                                    state: {
                                        name: borders[i].name,
                                        population: borders[i].population,
                                        region: borders[i].region,
                                        capital: borders[i].capital, 
                                        nativeName: borders[i].nativeName,
                                        subregion: borders[i].subregion,
                                        languages: borders[i].languages,
                                        currencies: borders[i].currencies,
                                        topLevelDomain: borders[i].topLevelDomain,
                                        borders: borders[i].borders,
                                        flag: borders[i].flag
                                    }
                                }}>{bord.name}</Link>
                            }
                        })}
                    </Border>
                </Header>
                
            </Container>
            
        </div>
    )
}
export default CardPage;