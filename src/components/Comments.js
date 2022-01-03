import React, { useState } from 'react';
import Comment from './Comment'

function Comments({ comments }) {
    const [search, setSearch] = useState("")
    const handleSearch = (e) => setSearch(e.target.value)
    const [commentsList, setCommentsList] = useState(comments)
    const [sortedComments, setSortedComments] = useState(false)

    function clickUpVotesComment(id){
        let updatedComments = commentsList.map((comment) => {
            if (comment.id === id) {
                comment.upvotes += 1
            }
            return comment;
        })
        setCommentsList(updatedComments)
    }

    function clickDownVotesComment(id){
        let updatedComments = commentsList.map((comment) => {
            if (comment.id === id) {
                comment.downvotes += 1
            }

            return comment;
        })

        setCommentsList(updatedComments)
    }

    function removeComment(id){
        let remainingComment = commentsList.filter((comment) => {
            if (comment.id !=id) {
                return true
            }
        })

        setCommentsList(remainingComment)
    }

    function sortCommentsFunction(){
        console.log()
        setSortedComments(!sortedComments)
    }

    let filteredComments = commentsList
    .filter(comment => {
        if ( search.length === 0) {
            return true
        } else if (comment.user.toLowerCase().includes(search.toLowerCase())) {
            return true
        } 
    })
    .sort((a, b) => {
        if (sortedComments === true) {
            if (a.user > b.user) {
                return 1
            } else if (a.user < b.user) {
                return -1
            }        
        } else {
            if (a.user < b.user) {
                return 1
            } else if (a.user > b.user) {
                return -1
            }
        }
    })
    .map(comment => {
       console.log()
        return (
            <Comment 
                key={comment.id} 
                comment={comment} 
                clickUpVotesComment={clickUpVotesComment} clickDownVotesComment={clickDownVotesComment} 
                removeComment={removeComment}
            />
        )
    })

return (
    <div>
        <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleSearch}
        />
        <button onClick={sortCommentsFunction}>Sort Comments</button>
        <h2>{filteredComments.length} comments</h2>
        {filteredComments}
    </div>
)
}


export default Comments;