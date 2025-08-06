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
    fetch(postApiVar)
      .then(response => response.json())
      .then(data => setPostApi(data))
      // .catch(error => console.error('Error:', error))
  }, []);

  return (
    <div style={{padding: '15px', display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gridColumnGap: '15px', gridRowGap: '15px'}} className='api_management'>

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
