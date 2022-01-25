import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';

const LandingPage = () => {
  return (
    <>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </>
  );
};

export default LandingPage;
