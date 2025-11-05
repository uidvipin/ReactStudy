import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

// Task By Amall part of React Class

const postApiVar = "https://jsonplaceholder.typicode.com/posts";

const PostsAPI = () => {

  type IPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  const [postApi, setPostApi]= useState<IPost[]>([]);
  useEffect(() => {
    fetch(postApiVar)//waiting for the response
      .then(response => response.json())//if response comes
      .then(data => setPostApi(data))// the necessary code
      // .catch(error => console.error('Error:', error))
  }, []);

  return (
    <div style={{padding: '15px', display: 'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gridColumnGap: '15px', gridRowGap: '15px'}} className='api_management'>

      {postApi.map((post, index) =>(
        <div key={index}>
          <h3>{post.id}</h3>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  )
}

export default PostsAPI
