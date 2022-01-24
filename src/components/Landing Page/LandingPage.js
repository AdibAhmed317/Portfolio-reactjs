import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
// import Try from '../Intro/Try';
import ProductList from '../ProductList/ProductList';

const LandingPage = () => {
  return (
    <>
      <Intro />
      <About />
      <ProductList />
      {/* <Try /> */}
      <Contact />
    </>
  );
};

export default LandingPage;
