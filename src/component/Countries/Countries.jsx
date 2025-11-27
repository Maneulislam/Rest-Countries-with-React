import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);

    const [countCountry, setCountCountry] = useState([]);
    const handleCountCountry = (country) => {
        const newCountry = [...countCountry, country];
        setCountCountry(newCountry);
    }


    return (
        <div>

            <h1>Traveling Countries: {countries.length}</h1>

            <h2>Visited Countries: {countCountry.length}</h2>

            <ol>
                {
                    countCountry.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.name.common} handleCountCountry={handleCountCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;