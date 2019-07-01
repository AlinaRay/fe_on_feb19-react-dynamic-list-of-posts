import React from 'react';

export default function Comment({comment}) {
    return (
        <li className='comment'>
            <p className='title'>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </li>
    )
}