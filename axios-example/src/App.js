import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from './posts';
import Images from './images';

const App = () =>{
// function App() {


  return (
    <div className="App">
      <h1> Images</h1>
      <Images/>
      <h1> Posts </h1>
      <Posts/>

    </div>
  );
}

export default App;
