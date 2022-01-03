import React, { useState } from 'react';

function Comment({comment, clickUpVotesComment, clickDownVotesComment, removeComment}){
    function onUpVoteClick(){
        clickUpVotesComment(comment.id)
    }
    function onDownVoteClick(){
        clickDownVotesComment(comment.id)
    }
    function onRemoveClick(){
        removeComment(comment.id)
    }

    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <button onClick={onUpVoteClick}>{comment.upvotes}👍</button>
            <button onClick={onDownVoteClick}>{comment.downvotes}👎</button>
            <button onClick={onRemoveClick}>Remove Comment</button>
        </div>
    )
}
export default Comment;