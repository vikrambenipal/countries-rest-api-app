import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Card from './components/Card';
import CardPage from './components/CardPage';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(e => {
        const countryData = e.data;
        setCountries(countryData);
      })
  }, [])

  const handleRegion = (newRegion) => {
    setRegion(newRegion);
  }

  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Search handleSearch={handleSearch}/>
              <Dropdown handleRegion={handleRegion}/>
              {/* <Switch> */}
                {countries.map((country, i) => {
                  const name = country.name;
                  return ((region === "" || region === country.region) && country.name.includes(search)) 
                  && 
                    <Card key={i} name={country.name} population={country.population} region={country.region} capital={country.capital} 
                    nativeName={country.nativeName} subregion={country.subregion} languages={country.languages} currencies={country.currencies} 
                    topLevelDomain={country.topLevelDomain} borders={country.borders} flag={country.flag}/>
                })}
              {/* </Switch> */}
            </Route>
            <Route exact path='/country/:name' component={CardPage} />
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
