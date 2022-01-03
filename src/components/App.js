import React, {useState} from 'react';
import video from "../data/video.js";
import Comments from "./Comments"

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)

  const comments = video.comments.map(comment => {
    return {...comment, upvotes: 0, downvotes: 0}
  })

  function clickUpVotes(){
    setUpVotes(upVotes + 1)
  }
  function clickDownVotes(){
    setDownVotes(downVotes +1)
  }

  function clickCommentSelector(){
    setShowComments(!showComments)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <h1>{video.title}</h1>
      <small>{video.views} | {video.createdAt}</small>
      <div>
        <button onClick={clickUpVotes}>{upVotes}👍</button>
        <button onClick={clickDownVotes}>{downVotes}👎</button>
      </div>
      <button onClick={clickCommentSelector}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments ? <Comments key={video.comments.id} comments={comments}/> : null}
    </div>
  );
}

export default App;
