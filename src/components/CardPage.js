import React from 'react'
import styled from'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    margin-left: 15px;
    width: 200px;
    border: 1px solid black;
`
const Flag = styled.img`
    width: 90%;
    max-width: 700px;
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
    p {
        margin-left: 25px;
        margin-right: 10px;
        box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.1049);
        padding: 5px 40px;
    }
`
const Content = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    span, p {
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
    }
`
const Container = styled.div`
    @media all and (min-width: 1100px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
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
        margin-top: 150px;
        h1 {
            margin-top: 0px;
        }
    }
    
`
const CardPage = (props) => {

    const { name, population, region, capital, nativeName, subregion, 
        languages, currencies, topLevelDomain, borders, flag } = props.location.state;
    return (
        <div>
            <Button to="/">Back</Button>
            <Container>   
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
                            {console.log(JSON.stringify(languages))}
                            <Row>
                                <p><span>Languages: </span></p>
                                {languages.map((lang, i) => {
                                    if(i === languages.length - 1){
                                        return <p>{lang.name}</p>
                                    }else{ 
                                        return <p>{ " " + lang.name + ","}   </p>
                                    }
                                })}
                            </Row>
                            
                        </Section2>
                    </Content>
                    
                    {borders.length > 0 &&<p><span className="border">Border Countries:</span></p>}
                    <Border>
                        {borders.map((bord, i) => {
                            if(i === borders.length - 1){
                                return <p>{bord}</p>
                            }else{ 
                                return <p>{bord} </p>
                            }
                        })}
                    </Border>
                </Header>
                
            </Container>
            
        </div>
    )
}
export default CardPage;