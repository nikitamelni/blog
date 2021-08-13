import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import fcPath from "../Posts/Fighting-cranes.md";
import '../Resources/Styles/Posts.css'

function Posts() {
  const [fcData, setFcData] = useState();

  fetch(fcPath)
    .then((response) => response.text())
    .then((text) => { setFcData(text) })
  return (
    <>
      <h2>Take a look a the posts below!</h2>
      Here you can see the recent posts:
      <div className="postContent">
        <ReactMarkdown children={fcData} />
      </div>
    </>
  );
}

export default Posts;

