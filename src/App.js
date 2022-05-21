import React from 'react';
import {useState} from 'react';
import { Routes, Route , Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Amazon from './components/Cart/Amazon';
import Cart from './components/Cart/Cart';

const App = ()=> {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div className="App">
       <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
        {/* <Register/> */}
    </div>
  );
}

export default App;
