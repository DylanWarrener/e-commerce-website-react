import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ContactPage from './pages/contact/contact';
import Header from './components/header/header';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}