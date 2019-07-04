import React from 'react';
import Post from '../post/Post';

export default function PostList({posts, filterBy, value}) {
    let post = posts.map((item) => {
        return (
            <Post
                key={item.id}
                post={item}
            />
        )
    });
    return (
        <div>
            <ul>
                {post}
            </ul>
        </div>
    )
};