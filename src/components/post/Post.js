import React from 'react';
import User from '../user/User';
import CommentsList from '../comments-list/CommentsList'

export default function Post({post}) {
    const {title, body, userId, user, comments} = post;
    return (
        <div className='post'>
            <h3 className='title'>{title}</h3>
            <p>{body}</p>
            <User
                key={userId}
                user={user}
            />
            <CommentsList
                comments={comments}
            />
        </div>
    )
};