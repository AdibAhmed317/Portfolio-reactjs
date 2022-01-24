import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landing Page/LandingPage';
import Dropdown from './components/Navbar/Dropdown';
import Navbar from './components/Navbar/Navbar';
import AboutRoute from './routes/AboutRoute';
import ContactRoute from './routes/ContactRoute';
import ProductListRoute from './routes/ProductListRoute';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutRoute />} />
        <Route path='/projects' element={<ProductListRoute />} />
        <Route path='/contact' element={<ContactRoute />} />
      </Routes>
    </>
  );
};

export default App;
