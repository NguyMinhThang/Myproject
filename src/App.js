import React from 'react';
import { Routes, Route , Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Amazon from './components/Cart/Amazon';

function App() {
  return (
    <div className="App">
      
     
       <Navbar/>
        <Amazon/>
        {/* <Register/> */}
    </div>
  );
}

export default App;
