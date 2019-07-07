import React from 'react';
import Post from '../post/Post';

export default function PostList({posts}) {
    return (
        <div>
            <ul>
                {
                    posts.map((item) => {
                        return (
                            <li key={item.id}>
                                <Post
                                    post={item}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};