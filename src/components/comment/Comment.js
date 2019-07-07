import React from 'react';

export default function Comment({comment}) {
    const {name, email, body} = comment;
    return (
        <div className='comment'>
            <p className='title'>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    )
}