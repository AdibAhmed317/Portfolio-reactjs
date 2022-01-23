import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landing Page/LandingPage';
import AboutRoute from './routes/AboutRoute';
import ContactRoute from './routes/ContactRoute';
import ProductListRoute from './routes/ProductListRoute';

const App = () => {
  return (
    <>
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
