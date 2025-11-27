import React from 'react';

const Country = ({ country }) => {

    const { name, flags } = country;

    return (
        <div>
            <h3>Name: {name.common}</h3>
            <p>{flags.svg}</p>
        </div>
    );
};

export default Country;