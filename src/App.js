import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Card from './components/Card';
import CardPage from './components/CardPage';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ThemeContext from './ThemeContext';
import GlobalStyle from './GlobalStyle';

const List = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  @media all and (min-width: 1050px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
  }
` 

function App() {

  

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [lightTheme, setLightTheme] = useState(true);

  const GetRequest = async () => {
    await axios.get("https://restcountries.eu/rest/v2/all").then(e => {
      const countryData = e.data;
      setCountries(countryData);
      
    })
  }

  useEffect(() => {
    GetRequest();
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = lightTheme ? "white" : "#202C36";
  }, [lightTheme])

  function toggleTheme(){
    setLightTheme(prevTheme => !prevTheme);
    
  }

  const handleRegion = (newRegion) => {
    setRegion(newRegion);
  }

  const handleSearch = (text) => {
    setSearch(text);
  }

  const FindBorders = (country, countries) => {
    let b_list = [];
    let j = 0;
    countries.forEach((other, i) => {
      if(country.borders.includes(other.alpha3Code)){
        b_list[j] = other;
        ++j;
      }
    });
    country.b_list = b_list;
  }
  

  return (
    <Router>
        <GlobalStyle />
        <ThemeContext.Provider value={lightTheme}>
        <div className="App">
          <Nav toggleTheme={toggleTheme}/>
          <Switch>
            <Route exact path="/">
              <Filter>
                <Search className="search" handleSearch={handleSearch} value={search}/>
                <Dropdown className="drop" handleRegion={handleRegion} value={region}/>
              </Filter>
              <List>
                {countries.map((country, i) => {
                  FindBorders(country, countries);
                  return ((region === "" || region === country.region) && country.name.toLowerCase().includes(search.toLocaleLowerCase())) 
                  && <Card key={i} name={country.name} population={country.population} region={country.region} capital={country.capital} 
                    nativeName={country.nativeName} subregion={country.subregion} languages={country.languages} currencies={country.currencies} 
                    topLevelDomain={country.topLevelDomain} b_list={country.b_list} flag={country.flag}/>
                })}
              </List>
            </Route>
            <Route exact path='/country/:name' 
            render={(props) => <CardPage {...props}  />}/>
          </Switch>
          
        </div>
        </ThemeContext.Provider>
    </Router>
    
  );
}

export default App;
