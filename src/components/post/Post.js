import React from 'react';
import User from '../user/User';
import CommentsList from '../comments-list/CommentsList'

export default function Post({post}) {
    return (
        <li className='post'>
            <h3 className='title'>{post.title}</h3>
            <p>{post.body}</p>
            <User key={post.userId}
                  user={post.user}
            />
            <CommentsList key={post.comments.postId}
                          comments={post.comments}
            />
        </li>
    )
};