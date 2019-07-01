import React from 'react';

export default function User({user}) {
    return (
        <div>
            <h4>Author:</h4>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>
                    {user.address.street} str.,
                    {user.address.suite},
                    Zip: {user.address.zipcode},
                    {user.address.city}<br/>
                    Geoposition:
                    lat:{user.address.geo.lat},
                    lng:{user.address.geo.lng}
                </li>
            </ul>
        </div>
    )
}