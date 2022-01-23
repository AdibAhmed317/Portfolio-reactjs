import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </>
  );
};

export default LandingPage;
