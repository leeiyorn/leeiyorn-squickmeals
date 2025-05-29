import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Getmeals from './components/Getmeals';
import Addmeals from './components/Addmeals';
import Signup from './components/Signup';
import Login from './components/Login';
import Payup from './components/Payup';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import AboutUs from './components/Aboutus';
import Home from './components/Home';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity = (newCart[existingIndex].quantity || 1) + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<Getmeals cart={cart} addToCart={addToCart} />} />
          <Route path='/addmeals' element={<Addmeals />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payup' element={<Payup cart={cart} clearCart={clearCart} />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
