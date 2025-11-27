import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countries = use(countriesPromise);
    console.log(countries);

    return (
        <div>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;