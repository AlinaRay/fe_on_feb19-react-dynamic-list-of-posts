import React from 'react';
import Comment from "../comment/Comment";

export default function CommentsList({comments}) {
    let commentsList = comments.map((item) => {
        return (
            <Comment key={item.id}
                     comment={item}
            />
        )
    });
    return (
        <div>
            <h4>Comments: </h4>
            <ul>
                {commentsList}
            </ul>
        </div>
    )
}