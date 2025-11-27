import React, { useState } from 'react';
import './Country.css'




const Country = ({ country, handleCountCountry }) => {

    const { name, flags } = country;


    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        handleCountCountry(country);
    }




    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;