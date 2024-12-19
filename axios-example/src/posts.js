import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () =>{
// function App() {

const [posts, setPosts] = useState([]);

useEffect(()=>{
  axios({
    method:'GET', 
    url:'https://jsonplaceholder.typicode.com/posts'
  })
  .then(res => setPosts(res.data))
})

  return (
    <div className="Posts">
      {posts.map(post=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default Posts;
