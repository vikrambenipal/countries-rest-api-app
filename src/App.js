import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(e => {
        const countryData = e.data;
        setCountries(countryData);
      })
  }, [])

  const handleRegion = (newRegion) => {
    setRegion(newRegion);
  }

  return (
    <div className="App">
      {console.log(countries)}
      <Nav />
      <input type="text" placeholder="Search for a country..."></input>
      <Dropdown handleRegion={handleRegion}/>
      {countries.map((country, i) => {
        return (region == "" || region == country.region) && <Card key={i} name={country.name} />
      })}
    </div>
  );
}

export default App;
