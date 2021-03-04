import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Card from './components/Card';
import axios from 'axios';
import { convertTypeAcquisitionFromJson } from 'typescript';

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
    <div className="App">
      <Nav />
      <Search handleSearch={handleSearch}/>
      <Dropdown handleRegion={handleRegion}/>
      {countries.map((country, i) => {
        return ((region == "" || region == country.region) && country.name.includes(search)) 
        && <Card key={i} name={country.name} population={country.population} region={country.region} capital={country.capital} 
        nativeName={country.nativeName} subregion={country.subregion} languages={country.languages} currencies={country.currencies} 
        topLevelDomain={country.topLevelDomain} borders={country.borders} flag={country.flag}/>
      })}
    </div>
  );
}

export default App;
