import React from 'react';

export default function User({user}) {
    const {name, email, address} = user;
    const {street, suite, zipcode, city, geo} = address;
    return (
        <div>
            <h4>Author:</h4>
            <ul>
                <li>{name}</li>
                <li>{email}</li>
                <li>
                    {street} str.,
                    {suite},
                    Zip: {zipcode},
                    {city}<br/>
                    Geoposition:
                    lat:{geo.lat},
                    lng:{geo.lng}
                </li>
            </ul>
        </div>
    )
}