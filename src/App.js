import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(e => {
        const countryData = e.data;
        countryData.map((country,i) => {
          setCountries(countryData);
        })
        console.log(countries);
      })
  }, [])

  return (
    <div className="App">
      <Nav />
      <input type="text" placeholder="Search for a country..."></input>
      <select name="Filter by Region">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}

export default App;
