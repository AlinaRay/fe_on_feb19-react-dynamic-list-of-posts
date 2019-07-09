import React from 'react';
import Comment from "../comment/Comment";

export default function CommentsList({comments}) {
    return (
        <div>
            <h4>Comments: </h4>
            <ul>
                {
                    comments.map((item) => {
                        return (
                            <li key={item.id}>
                                <Comment
                                    comment={item}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}