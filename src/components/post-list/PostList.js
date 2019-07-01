import React from 'react';
import Post from '../post/Post';

export default function PostList({posts}) {
    let post = posts.map((item) => {
        return (
            <Post key={item.id}
                  post={item}
            />
        )
    });
    return (
        <ul>
            {post}
        </ul>
    )
};