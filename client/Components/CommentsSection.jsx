import React, { useState, useEffect, useRef } from "react";

const CommentSection = (props) => {


  let comments = props.comments;
  console.log(comments);

  const postComment = (newComment) => { //need to identify connection between newComment and frontend element and need to have frontend execute "postComment" function
    
    console.log('here is the comment to post', newComment);
    
    fetch('/comment', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json',
    }
})


  return (
    <div>
      {props.comments.map((comment) => (
        <div key={"comment-username"}>
          <div>{comment.username}</div>
          <div>{comment.body}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
